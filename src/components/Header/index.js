import PropTypes from 'prop-types';
import {
  HeaderMenu, Nav, LinkMenu, ButtonTheme,
} from './style';

function Header({ onToggleTheme, selectedTheme }) {
  return (
    <HeaderMenu>
      <Nav>
        <LinkMenu to="/" activeClassName="selected" exact>Início</LinkMenu>
        <LinkMenu to="/about" activeClassName="selected">Sobre</LinkMenu>
        <LinkMenu to="/portfolio" activeClassName="selected">Portfólio</LinkMenu>
      </Nav>
      <ButtonTheme type="button" onClick={onToggleTheme}>
        {selectedTheme === 'dark' ? '🌞' : '🌚'}
      </ButtonTheme>
    </HeaderMenu>
  );
}

Header.propTypes = {
  onToggleTheme: PropTypes.func.isRequired,
  selectedTheme: PropTypes.string.isRequired,
};

export default Header;
