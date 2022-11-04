import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import HeroDetails from './pages/HeroDetails';
import Series from './pages/Series';
import TeamDetails from './pages/TeamDetails';
import CMS from './pages/CMS';
import AddTeam from './pages/AddTeam';
import Teams from './pages/Teams';
import { Member, Team } from './models/team';

import RequireAuth from './HOC/RequireAuth';
import useStream from './hooks/useStream';
import { useAppDispatch } from './hooks/reduxTypedHooks';
import { trackAuthStatus } from './api/auth';
import { logUserIn, logUserOut } from './rtk/slice/userSlice';
import AddMember from './pages/AddMember';

function App() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [members, setMembers] = useState<Member[]>([]);
  const dispatch = useAppDispatch();

  useStream({ dataStream: 'teams', setFileArray: setTeams });

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

  if (teams.length === 0) return <h1>Loading</h1>;

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Series teams={teams} />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/team/:teamId" element={<TeamDetails />} />
        <Route path="/:teamId/:heroId" element={<HeroDetails />} />
        <Route
          path="/cms"
          element={
            <RequireAuth>
              <CMS teams={teams} members={members} />
            </RequireAuth>
          }
        />
        <Route
          path="/cms/add-team"
          element={
            <RequireAuth>
              <AddTeam />
            </RequireAuth>
          }
        />
        <Route
          path="/cms/add-member"
          element={
            <RequireAuth>
              <AddMember />
            </RequireAuth>
          }
        />
        {/* <Route path="cms/edit/:teamId" element={<RequireAuth>
              <CMS />
            </RequireAuth>} /> */}
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
