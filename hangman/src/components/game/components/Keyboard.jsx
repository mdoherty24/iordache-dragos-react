import { playLetter } from '../contexts';
import { useGameState } from '../hooks';
import Letter from './Letter';

const letters = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
];

export const Keyboard = () => {
  const {
    state: { playedLetters, playing, paused },
    dispatch,
  } = useGameState();

  const renderKeyboardLine = (letters) => {
    return letters.map((letter, i) => {
      const letterAlreadyPlayed = playedLetters.includes(letter);
      const canPlayLetter = !letterAlreadyPlayed && playing && !paused;
      return (
        <Letter
          letter={letter}
          key={letter + i}
          onClick={
            canPlayLetter
              ? () => {
                  dispatch(playLetter(letter));
                }
              : undefined
          }
          className={`${!canPlayLetter ? 'bg-gray-500' : '' } border border-gray-400 rounded bg-gray-50 p-2.5 m-0.5`}
        ></Letter>
      );
    });
  };

  const renderKeyboard = () => {
    return letters.map((line, i) => {
      return <div  className="flex justify-center items-center" key={`keyboard-line-${i}`}>{renderKeyboardLine(line)}</div>;
    });
  };

  return <div>{renderKeyboard()}</div>;
};

export default Keyboard;
