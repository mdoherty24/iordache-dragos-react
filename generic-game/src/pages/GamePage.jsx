import { useState } from 'react';
import { Creature } from '../components/profile';
import { Button } from '../components/ui';

export const GamePage = () => {
  const [gameState, setGameState] = useState({
    playing: false,
  });
  const { playing } = gameState;

  return (
    <div className="p-4 container flex mx-auto">
      <div className="w-full mb-2 md:w-8/12">
        {playing ? (
          <>
            <Button title="Win game" type="button" onClick={() => {}}>
              Win game
            </Button>
            <Button title="Lose game" type="button" onClick={() => {}}>
              Lose game
            </Button>
            <Button title="Quit" type="button" onClick={() => {}}>
              Quit
            </Button>
          </>
        ) : (
          <Button
            title="Start Game"
            type="button"
            onClick={() => {
              setGameState({
                playing: true,
              });
            }}
          >
            Start Game
          </Button>
        )}
      </div>

      <div className="w-full md:w-4/12 flex flex-col items-center justify-center">
        <Creature></Creature>
      </div>
    </div>
  );
};

export default GamePage;
