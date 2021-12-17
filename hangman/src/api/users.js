import axios from 'axios';

const userStats = {
  gamesWon: 0,
  gamesLost: 0,
  gamesPlayed: 0,
};

export const usersApi = axios.create({
  baseURL: process.env.REACT_APP_API_USERS_BASE,
});

export const createUser = async (userId) => {
  const payload = {
    id: userId,
    stats: userStats,
  };

  return await usersApi.post('/users', payload);
};

export const readUser = async (userId) => {
  const { data } = await usersApi(`/users/${userId}`);

  if (data) {
    return data.stats;
  }

  return undefined;
};

export const updateUser = async (userId, stats) => {
  return await usersApi.patch(`/users/${userId}`, {
    stats,
  });
};

export const createProfile = async (userId, colors) => {
  const payload = {
    id: userId,
    creature: colors,
  };

  return await usersApi.post('/profiles', payload);
};

export const readProfile = async (userId) => {
  const { data } = await usersApi.get(`/profiles/${userId}`);

  if (data) {
    return data.creature;
  }

  return undefined;
};

export const updateProfile = async (userId, colors) => {
  const payload = {
    id: userId,
    creature: colors,
  };

  return await usersApi.patch(`/profiles/${userId}`, payload);
};

export const readStats = async () => {
  const { data } = await usersApi.get('/users');

  return data;
};
