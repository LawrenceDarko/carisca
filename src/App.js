// import './App.css';\
import React from 'react';
import Index from './pages/Home.js';
import About from './pages/AboutP.js';
import Media from './pages/MediaP.js';
import Projects from './pages/ProjectsP.js';
import Team from './pages/TeamP.js';
import Partnerships from './pages/Partnerships.js';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Index />}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/Media" element={<Media />}/>
        <Route exact path="/Projects" element={<Projects />}/>
        <Route exact path="/Team" element={<Team />}/>
        <Route exact path="/Partnerships" element={<Partnerships />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;


