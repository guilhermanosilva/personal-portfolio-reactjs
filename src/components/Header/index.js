import { HeaderMenu, Nav, LinkMenu } from './style';

function Header() {
  return (
    <HeaderMenu>
      <Nav>
        <LinkMenu to="/" activeClassName="selected" exact>Início</LinkMenu>
        <LinkMenu to="/about" activeClassName="selected">Sobre</LinkMenu>
        <LinkMenu to="/portfolio" activeClassName="selected">Portfólio</LinkMenu>
      </Nav>
    </HeaderMenu>
  );
}

export default Header;
