import { useMemo } from 'react';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { ui } from './reducers';
import { isBrowser } from './shared';

let store, composeEnhancer;
const initialState = {
  ui,
};

if (isBrowser() && process.env.NEXT_PUBLIC_ENV === 'dev') {
  composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} else {
  composeEnhancer = compose;
}

const initStore = (preloadedState = initialState) => {
  return createStore(
    rootReducer,
    preloadedState,
    composeEnhancer(applyMiddleware(thunk)),
  );
};

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });

    store = undefined;
  }

  if (!isBrowser()) {
    return _store;
  }

  if (!store) {
    store = _store;
  }

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);

  return store;
}
