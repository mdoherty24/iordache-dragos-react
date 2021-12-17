import { useGameState } from '../hooks';

export const Tries = () => {
  const {
    state: { triesLeft },
  } = useGameState();

  return <h1 className="text-3xl bold underline">Tries: {triesLeft}</h1>;
};

export default Tries;
