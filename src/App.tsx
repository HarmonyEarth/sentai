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
import { Team } from './models/team';

import { streamTeams } from './firebase';

function App() {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    const unsubscribe = streamTeams(
      (snapshot) => {
        const updatedTeams = snapshot.docs.map(
          (docSnapshot) => docSnapshot.data() as Team
        );
        setTeams(updatedTeams);
      },
      (error) => console.log(error)
    );
    return unsubscribe;
  }, [setTeams]);

  console.log(teams);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Series teams={teams} />} />
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
