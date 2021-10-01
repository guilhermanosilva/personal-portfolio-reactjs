import { BrowserRouter } from 'react-router-dom';
import Header from '../../components/Header';
import { ThemeProvider } from '../../context/ThemeContext';
import Routes from '../../Routes';
import GlobalStyle from '../../styles/global';

function App() {
  // use custom hooks to save theme in local storage

  return (
    <BrowserRouter>
      <ThemeProvider>
        <GlobalStyle />
        <Header />
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
