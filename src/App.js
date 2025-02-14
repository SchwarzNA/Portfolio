// src/App.js
import React, { useState, useEffect } from 'react';
import AppRouter from './AppRouter';
import './styles.css'; // Global styles with theme variables

const App = () => {
  // Initialize theme from localStorage if available
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  // Toggle between 'light' and 'dark'
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  // Persist theme and update global body class on theme change
  useEffect(() => {
    localStorage.setItem('theme', theme);
    // Adding the theme class to body for global styling
    document.body.className = theme;
  }, [theme]);

  return (
    // Apply a class to the top-level div based on the theme
    <div className={`App ${theme}`}>
      <AppRouter theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
};

export default App;
