import React from 'react';
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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Series />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/team/:teamId" element={<TeamDetails />} />
        <Route path="/hero/:heroId" element={<HeroDetails />} />
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
