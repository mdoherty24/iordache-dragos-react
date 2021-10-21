import { createContext } from 'react';

export const AppContext = createContext();

export const appState = {
  currentScreen: 'home',
  selected: null,
  searchResults: [],
};

export const appStateReducer = (appState, { type, payload }) => {
  if (type === 'setScreen') {
    // payload commits to being something like 'home' 'products' etc...
    return {
      ...appState,
      currentScreen: payload,
    };
  }

  if (type === 'setSelected') {
    return {
      ...appState,
      selected: payload,
    };
  }

  if (type === 'setSearchResults') {
    return {
      ...appState,
      searchResults: payload,
    };
  }

  return appState;
};
