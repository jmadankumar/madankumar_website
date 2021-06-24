import React, { useContext, useState } from 'react';

const ICON_SIZE = 30;

const defaultValue = {
  theme: 'light', // light or dark
  setTheme: () => {},
  ICON_SIZE,
  isNavOpen: false,
  openNavMenu: () => {},
  closeNavMenu: () => {},
};

export const ThemeContext = React.createContext(defaultValue);

export const ThemeConsumer = ThemeContext.Consumer;

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [isNavOpen, setNavOpen] = useState(false);

  const openNavMenu = () => {
    setNavOpen(true);
  };
  const closeNavMenu = () => {
    setNavOpen(false);
  };
  
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        ICON_SIZE,
        isNavOpen,
        openNavMenu,
        closeNavMenu,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
