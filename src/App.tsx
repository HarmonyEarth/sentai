import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Series from "./pages/Series";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Series />} />
        <Route path="/teams" />
        <Route path="/team/:teamId" />
        <Route path="/hero/:heroId" />
      </Routes>
    </div>
  );
}

export default App;
