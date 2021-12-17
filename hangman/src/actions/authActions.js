import { AUTH_LOGIN, AUTH_LOGOUT } from './actionTypes';
import {
  postUserStats,
  getUserStats,
  getUserProfile,
  postUserProfile,
} from './profileActions';

export const login = (user) => {
  return async (dispatch) => {
    const { id } = user;

    try {
      await dispatch(getUserStats(id));
    } catch (error) {
      await dispatch(postUserStats(id));
    }

    try {
      await dispatch(getUserProfile(id));
    } catch (error) {
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
