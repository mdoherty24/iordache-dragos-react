import { createContext } from 'react';
import {
  PAUSE_GAME,
  UNPAUSE_GAME,
  START_GAME,
  TICK_SECOND,
  PLAY_LETTER,
  END_GAME,
  SET_LETTER,
} from './GameActions';
import store from './../../../store.js';
import { startGame, endGame } from './../../../actions/gameActions';

export const GameContext = createContext();

export const initialState = {
  busy: false,
  playing: false,
  word: '',
  playedLetters: [],
  timeLeft: 60 * 5,
  triesLeft: 8,
  gameWon: false,
  paused: false,
};

export const gameReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TICK_SECOND:
      const timeLeft = state.timeLeft - 1;

      if (timeLeft <= 0) {
        return {
          ...initialState,
          word: state.word,
          gameWon: false,
        };
      } else {
        return {
          ...state,
          timeLeft,
        };
      }
    case START_GAME:
      store.dispatch(startGame());
      return {
        ...initialState,
        word: payload,
        playing: true,
      };
    case END_GAME:
      store.dispatch(endGame(false));
      return {
        ...initialState,
        word: state.word,
        playing: false,
        gameWon: false,
      };
    case PAUSE_GAME:
      return {
        ...state,
        paused: true,
      };
    case UNPAUSE_GAME:
      return {
        ...state,
        paused: false,
      };
    case SET_LETTER:
      const wordLength = state.word.length;
      const randomIndex = Math.floor(Math.random() * wordLength);

      const hintLetter = state.word[randomIndex];

      return {
        ...state,
        playedLetters: [state.playedLetters, hintLetter],
      };

    case PLAY_LETTER:
      let { triesLeft, playedLetters, word } = state;
      const letter = payload;

      if (!word.includes(letter)) {
        triesLeft = triesLeft - 1;
      }
      playedLetters = [...playedLetters, letter];

      const gameWon = hasGuessedWord(playedLetters, word);

      if (gameWon) {
        store.dispatch(endGame(true));
        return {
          ...initialState,
          triesLeft,
          word: state.word,
          gameWon: true,
        };
      } else if (triesLeft <= 0) {
        store.dispatch(endGame(false));
        return {
          ...initialState,
          triesLeft: 0,
          word: state.word,
          gameWon: false,
        };
      } else {
        return {
          ...state,
          triesLeft,
          playedLetters,
        };
      }

    default:
      return state;
  }
};

const hasGuessedWord = (playedLetters, word) => {
  const wordLetters = word.split('');
  let matchedLetters = 0;

  wordLetters.forEach((letter) => {
    matchedLetters = playedLetters.includes(letter)
      ? matchedLetters + 1
      : matchedLetters;
  });

  return matchedLetters === word.length ? true : false;
};
