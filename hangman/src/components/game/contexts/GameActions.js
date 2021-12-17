export const GET_WORD = 'GET_WORD';
export const START_GAME = 'START_GAME';
export const END_GAME = 'END_GAME';
export const RESET_GAME = 'RESET_GAME';
export const TICK_SECOND = 'TICK_SECOND';
export const PLAY_LETTER = 'PLAY_LETTER';
export const PAUSE_GAME = 'PAUSE_GAME';
export const UNPAUSE_GAME = 'UNPAUSE_GAME';
export const SET_LETTER = 'SET_LETTER';

export const tickSecond = () => {
  return {
    type: TICK_SECOND,
  };
};

export const startGame = (word) => {
  return {
    type: START_GAME,
    payload: word,
  };
};

export const endGame = () => {
  return {
    type: END_GAME,
  };
};

export const resetGame = () => {
  return {
    type: RESET_GAME,
  };
};

export const playLetter = (letter) => {
  return {
    type: PLAY_LETTER,
    payload: letter,
  };
};

// could also play letter silently ;)
// for extra stuff
export const setLetter = (count) => {
  return {
    type: SET_LETTER,
    payload: count,
  };
};

export const pauseGame = () => {
  return {
    type: PAUSE_GAME,
  };
};

export const unpauseGame = () => {
  return {
    type: UNPAUSE_GAME,
  };
};
