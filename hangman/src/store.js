import { applyMiddleware } from 'redux';
import { compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

// recipe to see redux stuff in the browser developer tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
