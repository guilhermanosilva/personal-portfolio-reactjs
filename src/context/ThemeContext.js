import PropTypes from 'prop-types';
import { useState, useMemo, createContext } from 'react';
import { ThemeProvider as ThemeProviderStyled } from 'styled-components';

import themes from '../styles/themes';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const currentTheme = useMemo(() => themes[theme] || themes.light, [theme]);

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
