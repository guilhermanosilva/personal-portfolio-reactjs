import PropTypes from 'prop-types';
import { useState, useMemo, createContext } from 'react';
import { ThemeProvider as ThemeProviderStyled } from 'styled-components';

import useLocalStorage from '../hooks/useLocalStorage';
import themes from '../styles/themes';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const localTheme = useLocalStorage('theme');
  const [theme, setTheme] = useState(localTheme || 'light');
  const definedLocalTheme = useLocalStorage('theme', theme);
  const currentTheme = useMemo(() => (
    themes[definedLocalTheme] || themes.light
  ), [definedLocalTheme]);

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'));
  }

  return (
    <ThemeContext.Provider value={{
      theme,
      onToggleTheme: handleToggleTheme,
    }}
    >
      <ThemeProviderStyled theme={currentTheme}>
        {children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
