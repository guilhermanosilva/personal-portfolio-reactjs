import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="App-header">
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/portfolio">Portfólio</Link>
      </nav>
    </header>
  );
}

export default Header;
