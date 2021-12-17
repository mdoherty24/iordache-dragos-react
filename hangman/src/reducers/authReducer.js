import { AUTH_LOGIN, AUTH_LOGOUT } from '../actions';

const initialState = {
  user: {},
  authenticated: false,
  established: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        authenticated: true,
        established: true,
        user: action.payload,
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        authenticated: false,
        established: true,
        user: {},
      };
    default:
      return state;
  }
};

export default authReducer;
