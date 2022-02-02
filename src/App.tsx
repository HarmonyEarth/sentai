import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import HeroDetails from "./pages/HeroDetails";
import Series from "./pages/Series";
import TeamDetails from "./pages/TeamDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Series />} />
        <Route path="/teams" />
        <Route path="/team/:teamId" element={<TeamDetails />} />
        <Route path="/hero/:heroId" element={<HeroDetails />} />
      </Routes>
    </div>
  );
}

export default App;
