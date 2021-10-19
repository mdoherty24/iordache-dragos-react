import { createContext } from 'react';

export const AppContext = createContext();

export const appState = {
  currentScreen: 'home',
};

export const appStateReducer = (appState, { type, payload }) => {
  if (type === 'setScreen') {
    // payload commits to being something like 'home' 'products' etc...
    return {
      ...appState,
      currentScreen: payload,
    };
  }

  return appState;
};
