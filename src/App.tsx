import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import HeroDetails from './pages/HeroDetails';
import Series from './pages/Series';
import TeamDetails from './pages/TeamDetails';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import CMS from './pages/CMS';
import AddTeam from './pages/AddTeam';
import Teams from './pages/Teams';
import { useAppDispatch, useAppSelector } from './hooks/reduxTypedHooks';
import {
  allTeams,
  getAllTeams,
  getTeamsError,
  getTeamsStatus,
} from './rtk/slice/teamsSlice';
import { Team } from './models/team';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db, grabTeams } from './firebase';
import { useCallbackRef } from './hooks/useFileUpload';

function App() {
  // const dispatch = useAppDispatch();
  // const teams = useAppSelector(allTeams);
  // const teamsStatus = useAppSelector(getTeamsStatus);
  // const teamsError = useAppSelector(getTeamsError);

  // useEffect(() => {
  //   if (teamsStatus === 'idle') {
  //     const disVar = dispatch(getAllTeams());
  //     console.log(disVar, 'asas');
  //   }
  // }, [teamsStatus, dispatch]);

  // console.log('Errors', teamsError);
  // console.log('Status', teamsStatus);

  const [teams, setTeams] = useState<Team[]>([]);

  // const colRef = collection(db, 'teams');

  // const q = query(
  //   colRef,
  //   // where('artist', '==', 'Takayuki Miyauchi'),
  //   orderBy('year', 'asc')
  // );
  // const addTeamData = useCallbackRef(setTeams);
  // onSnapshot(q, (snapshot) => {
  //   setTeams([]);
  //   let updatedTeams: Team[] = [];
  //   snapshot.docs.forEach((doc) => {
  //     updatedTeams.push({ ...(doc.data() as Team), id: doc.id });
  //     addTeamData.current?.((prev: Team[]) => [...updatedTeams]);
  //   });
  //   console.log('useEffect Ran');
  // });
  // useEffect(() => {
  //   const fetchTeams = () => {};
  //   teams && fetchTeams();
  // }, [q, setTeams, teams, addTeamData]);

  useEffect(() => {
    const grabbedTeams = grabTeams();
    setTeams((prev) => grabbedTeams);
    console.log('Effect ran');
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Series teams={teams.length > 0 ? teams : []} />}
        />
        <Route path="/teams" element={<Teams />} />
        <Route path="/team/:teamId" element={<TeamDetails />} />
        <Route path="/:teamId/:heroId" element={<HeroDetails />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="log-in" element={<LogIn />} />
        <Route path="cms" element={<CMS />} />
        <Route path="cms/add" element={<AddTeam />} />
        <Route path="cms/edit/:teamId" element={<CMS />} />
      </Routes>
    </div>
  );
}

export default App;
