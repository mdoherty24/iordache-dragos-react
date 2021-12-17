import { readStats } from '../api/users';
import { SET_USERS } from './userTypes';

export const getUsers = () => {
  return async (dispatch, getState) => {
    let { users } = getState();

    // OF COURSE IT'S SHITTY, THIS IS A SHITTY DESIGN
    // if dumbing down is not necessary, javascripitivze that state keuy
    if (Object.keys(users.users).length > 0) {
      return;
    }

    users = await readStats();

    const mappedUsers = {};
    users.forEach(({ id, ...rest }) => {
      mappedUsers[id] = { id, ...rest };
    });

    dispatch(setUsers(mappedUsers));
  };
};

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    payload: users,
  };
};
