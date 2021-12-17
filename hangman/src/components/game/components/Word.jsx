import { useGameState } from '../hooks';
import Letter from './Letter';

export const Word = () => {
  const {
    state: { word },
  } = useGameState();
  const {
    state: { playedLetters, playing },
  } = useGameState();

  const renderLetters = (word) => {
    const letters = word.split('');

    return letters.map((letter, i) => {
      let covered = !playedLetters.includes(letter);

      if (!playing) {
        covered = false;
      }

      return <Letter covered={covered} letter={letter} key={i}></Letter>;
    });
  };

  return <div className="text-2xl font-bold">{renderLetters(word)}</div>;
};

export default Word;
