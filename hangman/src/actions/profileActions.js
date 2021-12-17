import {
  createUser,
  readUser,
  updateUser,
  createProfile,
  readProfile,
  updateProfile,
} from '../api/users';
import {
  PROFILE_SET_COLOR,
  PROFILE_SET_STATS,
  PROFILE_SET_COLORS,
} from './actionTypes';

export const setCreatureColor = (targetProperty, color) => {
  return {
    type: PROFILE_SET_COLOR,
    payload: {
      targetProperty,
      color,
    },
  };
};

export const setCreatureColors = (colors) => {
  return {
    type: PROFILE_SET_COLORS,
    payload: colors,
  };
};

export const postUserStats = (userId) => {
  return async () => {
    await createUser(userId);
  };
};

export const getUserStats = (userId) => {
  return async (dispatch) => {
    let stats = {};

    try {
      stats = await readUser(userId);
    } catch ({ response }) {
      return Promise.reject(response);
    }

    dispatch(setUserStats(stats));

    return Promise.resolve(stats);
  };
};

export const updateUserStats = (userId, stats) => {
  return async (dispatch) => {
    await updateUser(userId, stats);

    dispatch(setUserStats(stats));
  };
};

export const setUserStats = (stats) => {
  return {
    type: PROFILE_SET_STATS,
    payload: stats,
  };
};

export const postUserProfile = (userId) => {
  return async (_, getState) => {
    const { profile } = getState();
    await createProfile(userId, profile.creature);
  };
};

export const getUserProfile = (userId) => {
  return async (dispatch) => {
    let creatureColors = {};

    try {
      creatureColors = await readProfile(userId);
    } catch (error) {
      return Promise.reject();
    }

    dispatch(setCreatureColors(creatureColors));
    return Promise.resolve(creatureColors);
  };
};

export const patchUserProfile = (userId, colors) => {
  return async () => {
    await updateProfile(userId, colors);
  };
};
