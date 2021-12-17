import { getRandomWord } from '../../api';
import { Creature } from '../profile';
import { Keyboard, Word, Timer, Tries } from './components';
import Controls from './components/Controls';
import { setLetter, startGame } from './contexts';
import { useGameState } from './hooks';

export const Game = () => {
  const {
    state: { playing, gameWon, word, triesLeft },
    dispatch,
  } = useGameState();

  let modifier = '';

  if (triesLeft <= 0) {
    modifier = 'dead';
  } else if (triesLeft < 4) {
    modifier = 'annoyed';
  } else if (triesLeft < 6) {
    modifier = 'worried';
  }

  return (
    <>
      <header>
        <Tries></Tries>
        {playing ? <Timer></Timer> : null}
      </header>
      <section className="flex justify-between flex-wrap mt-8 mb-4">
        <div className="w-full md:w-8/12 mb-2">
          <Word></Word>
          {!playing ? (
            <>
              <button
                className="bg-blue-500 inline-block text-center py-2 px-4 text-white rounded hover:bg-blue-700 mr-4 mt-2"
                onClick={async () => {
                  const word = await getRandomWord();

                  dispatch(startGame(word));
                  dispatch(setLetter());
                }}
              >
                Start
              </button>
              {word.length <= 0 ? <></> : gameWon ? 'You won!' : 'You lost!'}
            </>
          ) : (
            <></>
          )}
        </div>

        <div className="w-full md:w-4/12 flex flex-col justify-center">
          <div className="flex flex-col justify-center items-center">
            <Creature modifier={modifier}></Creature>
            <Controls></Controls>
          </div>
        </div>
      </section>

      <section>
        <Keyboard></Keyboard>
      </section>
    </>
  );
};

export default Game;
