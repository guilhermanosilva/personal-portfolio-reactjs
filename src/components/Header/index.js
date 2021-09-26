import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import {
  HeaderMenu, Nav, LinkMenu, ButtonTheme,
} from './style';

function Header() {
  const { theme, onToggleTheme } = useContext(ThemeContext);

  return (
    <HeaderMenu>
      <Nav>
        <LinkMenu to="/" activeClassName="selected" exact>Início</LinkMenu>
        <LinkMenu to="/about" activeClassName="selected">Sobre</LinkMenu>
        <LinkMenu to="/portfolio" activeClassName="selected">Portfólio</LinkMenu>
      </Nav>
      <ButtonTheme type="button" onClick={onToggleTheme}>
        {theme === 'dark' ? '🌞' : '🌚'}
      </ButtonTheme>
    </HeaderMenu>
  );
}

export default Header;
