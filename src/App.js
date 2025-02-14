// src/App.js
import React, { useState } from 'react';
import AppRouter from './AppRouter';
import './styles.css'; // import the global styles

const App = () => {
  const [theme, setTheme] = useState('light');

  // Toggle between 'light' and 'dark'
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    // Apply a class to the top-level div based on the theme
    <div className={`App ${theme}`}>
      {/*
        Pass theme and toggleTheme down to AppRouter so
        Navbar (inside AppRouter) can access them.
      */}
      <AppRouter theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
};

export default App;
