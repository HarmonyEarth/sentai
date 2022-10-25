import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logUserIn: (state) => {
      return {
        ...state,
        isLoggedIn: true,
      };
    },
    logUserOut: (state) => {
      return {
        ...state,
        isLoggedIn: false,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { logUserIn, logUserOut } = userSlice.actions;

export default userSlice.reducer;
