import { combineReducers } from 'redux';

import uiReducer from './ui';
export { initialState as ui } from './ui';

const rootReducer = combineReducers({
  ui: uiReducer,
});

export default rootReducer;
