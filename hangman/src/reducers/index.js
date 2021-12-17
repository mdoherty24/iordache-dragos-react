import { combineReducers } from 'redux';
import authReducer from './authReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';

const reducers = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  users: usersReducer,
});

export default reducers;
