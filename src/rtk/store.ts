import { configureStore } from '@reduxjs/toolkit';
import teamsReducer from './slice/teamsSlice';

export const store = configureStore({
  reducer: {
    teams: teamsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
