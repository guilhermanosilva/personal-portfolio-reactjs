import { useState, useMemo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from '../../components/Header';
import Routes from '../../Routes';
import GlobalStyle from '../../styles/global';

import themes from '../../styles/themes';

function App() {
  const [theme] = useState('light');
  const currentTheme = useMemo(() => themes[theme] || themes.dark, [theme]);

  // implements handleToggleTheme
  // use contextAPi to pass theme for the header
  // use custom hooks to save theme in local storage

  return (
    <BrowserRouter>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <Header />
        <main>
          <Routes />
        </main>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
