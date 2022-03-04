// import './App.css';\
import React from 'react';
import Index from './pages/index.js';
import About from './pages/about.js';
import Media from './pages/media.js';
import Projects from './pages/projects.js';
import Team from './pages/team.js';
import Partnerships from './pages/partnerships.js';

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
