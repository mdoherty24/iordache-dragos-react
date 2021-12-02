import { initializeGoogleAuth } from '../../../api/googleAuth';
import { readUsers } from '../../../api/users';
import {
  getUserProfile,
  getUserStats,
  postUserProfile,
  postUserStats,
} from '../profile';
import { AUTH_LOGOUT, AUTH_LOGIN, SET_USERS } from './../../types/auth';

export const login = (user) => {
  return async (dispatch) => {
    const { id } = user;

    // read
    // determine if user is there
    // if not, create
    try {
      await dispatch(getUserStats(id));
    } catch (response) {
      const { status: httpStatus } = response;

      if (httpStatus === 404) {
        await dispatch(postUserStats(id));
      }

      // do more error handling
    }

    // read profile
    // determine if user has a profile
    // if not, create
    try {
      // dispatch getUserProfile
      await dispatch(getUserProfile(id));
    } catch (response) {
      // dispatch postUserProfile
      await dispatch(postUserProfile(id));
    }

    dispatch(setLogin(user));
  };
};

export const setLogin = (user) => {
  return {
    type: AUTH_LOGIN,
    payload: user,
  };
};

export const logout = () => {
  return {
    type: AUTH_LOGOUT,
  };
};

export const requestSignIn = () => {
  return async () => {
    return initializeGoogleAuth().then((GoogleAuth) => {
      GoogleAuth.signIn();
    });
  };
};

export const requestSignOut = () => {
  return async () => {
    return initializeGoogleAuth().then((GoogleAuth) => {
      GoogleAuth.signOut();
    });
  };
};

// should be in a users slice!!!
export const getUsers = (force = false) => {
  return async (dispatch, getState) => {
    const state = getState();
    const cached = state.users.cached;

    if (cached === true && force === false) {
      return;
    }

    try {
      const users = await readUsers();

      dispatch(setUsers(users));
    } catch (response) {
      console.log(response);
    }
  };
};

// should be in a users slice!!!
export const setUsers = (users) => {
  return {
    type: SET_USERS,
    payload: users,
  };
};
