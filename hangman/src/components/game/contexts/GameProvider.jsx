import { useReducer } from 'react';
import { GameContext, gameReducer, initialState } from './GameContext';

export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const value = { state, dispatch };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export default GameProvider;
