import { GAME_ENDED, GAME_STARTED } from '../../types/game';

export const gameStarted = () => {
  return {
    action: GAME_STARTED,
  };
};

export const gameEnded = () => {
  return {
    action: GAME_ENDED,
  };
};
