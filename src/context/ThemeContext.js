import React, { useCallback, useContext, useState } from 'react';

const ICON_SIZE = 30;

const DEFAULT_THEME = 'dark';
const defaultValue = {
  theme: DEFAULT_THEME, // light or dark
  changeTheme: () => {},
  ICON_SIZE,
  isNavOpen: false,
  openNavMenu: () => {},
  closeNavMenu: () => {},
};

export const ThemeContext = React.createContext(defaultValue);

export const ThemeConsumer = ThemeContext.Consumer;

const THEME_KEY = 'theme';

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem(THEME_KEY) || DEFAULT_THEME
  );
  const [isNavOpen, setNavOpen] = useState(false);

  const openNavMenu = useCallback(() => {
    setNavOpen(true);
  }, []);

  const closeNavMenu = useCallback(() => {
    setNavOpen(false);
  }, []);

  const changeTheme = useCallback((theme) => {
    localStorage.setItem(THEME_KEY, theme);
    setTheme(theme);
  }, []);
  
  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
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
