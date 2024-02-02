// Fichier DarkModeProvider.js
import React, { useState } from 'react';

export const DarkModeContext = React.createContext();


const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => {
      return !prevDarkMode;
    });
  };
  
  

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
