import { useState } from 'react';
import { Authorize } from '../components/auth';
import { Creature } from '../components/profile';
import { Button } from '../components/ui';

export const GamePage = () => {
  const [gameState, setGameState] = useState({
    playing: false,
  });
  const { playing } = gameState;

  return (
    <div className="p-4 container flex mx-auto">
      <Authorize>
        <div className="w-full mb-2 md:w-8/12 flex items-center justify-around">
          {playing ? (
            <>
              <Button title="Win game" type="button" onClick={() => {}}>
                Win game
              </Button>
              <Button
                title="Lose game"
                type="button"
                skin="dangerInverted"
                onClick={() => {}}
              >
                Lose game
              </Button>
              <Button
                title="Quit"
                type="button"
                skin="danger"
                onClick={() => {
                  setGameState({
                    playing: false,
                  });
                }}
              >
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
      </Authorize>
    </div>
  );
};

export default GamePage;
