import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { register } from '../../api/auth';

const initialState = {
  user: {},
  authenticated: false,
  established: false,
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }) => {
    const credentials = await register(name, email, password);
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducer: {},
});

export default authSlice.reducer;
