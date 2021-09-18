import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeaderMenu = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: ${({ theme }) => theme.sizing.mp1} 0;
`;

const Nav = styled.nav`
  margin-left: ${({ theme }) => theme.sizing.mp2};
`;

const LinkMenu = styled(NavLink)`
  color: ${({ theme }) => theme.colors.text5};
  display: inline-block;
  font-size: ${({ theme }) => theme.sizing.m2};
  font-weight: bold;
  transition: 0.2s;

  & + a {
    margin-left: ${({ theme }) => theme.sizing.mp1};
  }

  &:after {
    content: "";
    display: block;
    width: 0;
    border-bottom: 2px solid ${({ theme }) => theme.colors.text5};
    transition: 0.25s;
  }

  &:hover:after {
    width: 100%;
  }

  &.selected {
    color: ${({ theme }) => theme.colors.primary};
    border-bottom-color: ${({ theme }) => theme.colors.primary};
  }
`;

export { HeaderMenu, Nav, LinkMenu };
