import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logUserIn: (state) => {
      return {
        ...state,
        value: true,
      };
    },
    logUserOut: (state) => {
      return {
        ...state,
        value: initialState.value,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { logUserIn, logUserOut } = userSlice.actions;

export default userSlice.reducer;
