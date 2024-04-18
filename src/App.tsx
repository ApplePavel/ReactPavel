import React, { useLayoutEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Courses from './Pages/Courses/Courses';
import About from './Pages/About/About';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';

function App() {
  const currentTheme = localStorage.getItem('currentTheme') || 'light';
  const [theme, setTheme] = useState(currentTheme);

  useLayoutEffect(() => {
    localStorage.setItem('currentTheme', theme);
    const root = window.document.documentElement;
    root.setAttribute('theme', theme);
  }, [theme]);

  return (
    <div className="App">
      <Navbar theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </div>
  );
}

export default App;
