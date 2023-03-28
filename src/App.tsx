import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import HeroDetails from './pages/HeroDetails';
import Series from './pages/Series';
import TeamDetails from './pages/TeamDetails';
import CMS from './pages/CMS';
import Teams from './pages/Teams';
import { Member, Team } from './models/team';
import { Toaster } from 'react-hot-toast';

import RequireAuth from './HOC/RequireAuth';
import useStream from './hooks/useStream';
import { useAppDispatch } from './hooks/reduxTypedHooks';
import { trackAuthStatus } from './auth';
import { logUserIn, logUserOut } from './rtk/slice/userSlice';
import EditTeam from './pages/EditTeam';
import EditMember from './pages/EditMember';
import { streamMembers, streamTeams } from './firebase';

function App() {
  const [teams, setTeams] = useState<Team[] | null>(null);
  const [members, setMembers] = useState<Member[] | null>(null);
  const dispatch = useAppDispatch();

  useStream({ setFileArray: setTeams, streamData: streamTeams });
  useStream({ setFileArray: setMembers, streamData: streamMembers });

  useEffect(() => {
    trackAuthStatus((user) => {
      if (user) {
        dispatch(logUserIn());
        console.log('User is available');
      } else {
        dispatch(logUserOut());
        console.log('User is not available');
      }
    });
  }, [dispatch]);

  if (!teams || !members)
    return (
      <>
        <h1>Loading</h1>
      </>
    );

  const completeTeams = teams.filter((team) =>
    Object.values(team).every((value) => value)
  );

  const completeMembers = members.filter((member) =>
    Object.values(member).every((value) => value)
  );

  return (
    <div className="App">
      <Navbar />
      <Toaster />
      <Routes>
        <Route
          path="/"
          element={<Series teams={completeTeams} members={completeMembers} />}
        />
        <Route path="/teams" element={<Teams />} />
        <Route path="/team/:teamId" element={<TeamDetails />} />
        <Route
          path="/:teamId/:heroId"
          element={
            <HeroDetails members={completeMembers} teams={completeTeams} />
          }
        />
        <Route
          path="/cms"
          element={
            <RequireAuth>
              <CMS teams={teams} members={members} />
            </RequireAuth>
          }
        />
        <Route
          path="/cms/team/:id"
          element={
            <RequireAuth>
              <EditTeam teams={teams} />
            </RequireAuth>
          }
        />
        <Route
          path="/cms/member/:id"
          element={
            <RequireAuth>
              <EditMember members={members} teams={completeTeams} />
            </RequireAuth>
          }
        />
        <Route
          path="*"
          element={
            <>
              <h1>Error 404</h1>
              <p>Page Not Found</p>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
