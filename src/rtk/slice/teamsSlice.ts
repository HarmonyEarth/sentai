import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../firebase';
import { Team } from '../../models/team';
import { RootState } from '../store';

const colRef = collection(db, 'teams');

const q = query(colRef, orderBy('year', 'asc'));

// onSnapshot(q, (snapshot) => {
//   teams = [];
//   snapshot.docs.forEach((doc) => {
//     teams.push({ ...(doc.data() as Team), id: doc.id });
//   });
// });

interface Props {
  teams: Team[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState = {
  teams: [],
  loading: 'idle',
  error: null,
} as Props;

// let teams: Team[] = [];

// const initialState = {
//   teams,
// };

export const getAllTeams = createAsyncThunk('teams/getAllTeams', async () => {
  let updatedTeams: Team[] = [];
  await onSnapshot(q, (snapshot) => {
    updatedTeams = [];
    snapshot.docs.forEach((doc) => {
      updatedTeams.push({ ...(doc.data() as Team), id: doc.id });
    });
  });
  return updatedTeams;
});

export const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    // fetchData: (state) => {
    //   onSnapshot(q, (snapshot) => {
    //     state.teams = [];
    //     snapshot.docs.forEach((doc) => {
    //       state.teams.push({ ...(doc.data() as Team), id: doc.id });
    //     });
    //   });
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllTeams.pending, (state, action) => {
      state.loading = 'pending';
    });
    builder.addCase(getAllTeams.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.teams.push(...action.payload);
    });
    builder.addCase(getAllTeams.rejected, (state, action) => {
      state.loading = 'failed';
      state.error = action.error.message as string;
    });
  },
});

// export const { fetchData } = teamsSlice.actions;

export const allTeams = (state: RootState) => state.teams.teams;
export const getTeamsStatus = (state: RootState) => state.teams.loading;
export const getTeamsError = (state: RootState) => state.teams.error;

export default teamsSlice.reducer;
