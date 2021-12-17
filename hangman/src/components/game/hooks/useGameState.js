import { useContext } from 'react';
import { GameContext } from '../contexts';

export const useGameState = () => {
  const context = useContext(GameContext);

  return context;
};

export default useGameState;
