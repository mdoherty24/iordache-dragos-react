import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {},
});

export default uiSlice.reducer;

// export actions
