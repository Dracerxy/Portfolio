import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Navigation/Navigation";
import About from "./About/About";
import Skills from "./SkillSet/Skills";
import Projects from "./Projects/Projects";
import Contact from "./ContactLinks/Contact";
import "./Styles/app.css";
import Background from "./Background/Background.js";
import PlayerStats from "./Name-Label/Namelable";

const App = () => {
  return (
    <Router>
      <Nav />
      <Background />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <PlayerStats />
    </Router>
  );
};

export default App;