import React, { useState } from 'react';
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

function App() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [members, setMembers] = useState<Member[]>([]);

  useStream({ dataStream: 'teams', setFileArray: setTeams });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Series teams={teams} />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/team/:teamId" element={<TeamDetails />} />
        <Route path="/:teamId/:heroId" element={<HeroDetails />} />
        <Route
          path="cms"
          element={
            <RequireAuth>
              <CMS />
            </RequireAuth>
          }
        />
        <Route
          path="cms/add"
          element={
            <RequireAuth>
              <AddTeam />
            </RequireAuth>
          }
        />
        {/* <Route path="cms/edit/:teamId" element={<CMS />} /> */}
      </Routes>
    </div>
  );
}

export default App;
