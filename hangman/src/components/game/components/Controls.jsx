import { useState } from 'react';
import { getRandomWord } from '../../../api';
import { Button } from '../../ui';
import {
  endGame,
  pauseGame,
  setLetter,
  startGame,
  unpauseGame,
} from '../contexts';
import { useGameState } from '../hooks';
import { Dialog } from './Dialog';

export const Controls = () => {
  const [displayPauseDialog, setDisplayPauseDialog] = useState(false);
  const [displayConfirmEndDialog, setDisplayConfirmEndDialog] = useState(false);

  const {
    state: { playing, paused },
    dispatch,
  } = useGameState();

  const renderStartButton = () => {
    if (playing) {
      return <></>;
    }

    return (
      <Button
        onClick={async () => {
          const word = await getRandomWord();

          dispatch(startGame(word));
          dispatch(setLetter());
        }}
        title="Start Game"
      >
        Start
      </Button>
    );
  };

  const renderPauseButton = () => {
    if (!playing) {
      return <></>;
    }

    if (paused) {
      return (
        <Button
          onClick={() => {
            dispatch(unpauseGame());
          }}
          type="button"
          title="Unpause Game"
        >
          Unpause
        </Button>
      );
    } else {
      return (
        <Button
          onClick={() => {
            dispatch(pauseGame());
            setDisplayPauseDialog(true);
          }}
          type="button"
          title="Pause Game"
        >
          Pause
        </Button>
      );
    }
  };

  const dismissPauseDialog = () => {
    dispatch(unpauseGame());
    setDisplayPauseDialog(false);
  };

  const renderEndGameButton = () => {
    if (!playing) {
      return <></>;
    }

    return (
      <Button
        type="button"
        onClick={() => {
          dispatch(pauseGame());
          setDisplayConfirmEndDialog(true);
        }}
        title="Quit game"
        skin="primaryInverted"
        className="ml-2"
      >
        Quit
      </Button>
    );
  };

  const dismissEndGameDialog = () => {
    dispatch(unpauseGame());
    setDisplayConfirmEndDialog(false);
  };

  return (
    <div className="pt-2">
      {renderStartButton()}
      {renderPauseButton()}
      {renderEndGameButton()}

      <Dialog show={displayPauseDialog} onClose={dismissPauseDialog}>
        <div className="flex flex-col justify-center items-center mx-6">
          <div>Game is paused</div>
          <button
            type="button"
            onClick={dismissPauseDialog}
            title="Unpause game"
            className="bg-green-500 hover:bg-green-600 rounded text-white px-2.5 py-1 m-2"
            >
              Unpause
          </button>
        </div>
      </Dialog>

      <Dialog show={displayConfirmEndDialog} onClose={dismissEndGameDialog}>
        <div>Are you sure you want to end this game?</div>
        <div className="flex justify-between items-center mt-1">
          <button
            type="button"
            onClick={() => {
              dispatch(endGame());
              dismissEndGameDialog();
            }}
            title="Quit game"
            className="bg-red-500 hover:bg-red-600 rounded text-white px-2.5 py-1 m-1 "
          >
            Quit
          </button>

          <button
            title="Continue game"
            onClick={dismissEndGameDialog}
            className="bg-green-500 hover:bg-green-600 rounded text-white px-2.5 py-1 m-1"
          >
            Continue
          </button>
        </div>
      </Dialog>
    </div>
  );
};

export default Controls;
