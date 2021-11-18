import { createUser, readUser } from '../../../api/users';
import { PROFILE_SET_STATS } from '../../types/profile';

// getUserStats
export const getUserStats = (userId) => {
  return async (dispatch) => {
    try {
      const stats = await readUser(userId);

      dispatch(setUserStats(stats));

      return stats;
    } catch ({ response }) {
      return Promise.reject(response);
    }
  };
};

export const setUserStats = (stats) => {
  return {
    type: PROFILE_SET_STATS,
    payload: stats,
  };
};

// postUserStats
export const postUserStats = (userId) => {
  return async () => {
    await createUser(userId);
  };
};
