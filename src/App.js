// React Portfolio Site
import React from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import './App.css';
import Home from './Components/Home';
const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Home/>
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;