import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { register, login } from '../../api/auth';

const initialState = {
  user: {},
  authenticated: false,
  established: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
      state.authenticated = true;
    },
    unsetUser: () => {},
  },
});

export const { setUser } = authSlice.actions;

export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }, { dispatch }) => {
    const credentials = await register(name, email, password);

    document.cookie = `token=${credentials.token}`;

    dispatch(setUser(credentials.user));

    return credentials;
  },
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { dispatch }) => {
    const credentials = await login(email, password);

    document.cookie = `token=${credentials.token}`;

    dispatch(setUser(credentials.user));

    return credentials;
  },
);

export default authSlice.reducer;
