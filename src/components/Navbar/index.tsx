import React from 'react';
import { Container, LogoMenu, Navlinks, NavMenu } from './styles';
import Logo from '../../assets/logo.png';
import { MenuItems } from './menuItems';
import { api } from '../../services';

const Navbar: React.FC = () => {
  const handleLogout = (): void => {
    localStorage.removeItem('token');
    api.defaults.headers.Autjorization = undefined;
    window.location.reload();
  };
  return (
    <Container>
      <LogoMenu>
        <img src={Logo} alt="ImageLogo" width="120" height="78" />
      </LogoMenu>
      <NavMenu>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Navlinks href={item.url}>{item.title}</Navlinks>
            </li>
          );
        })}
      </NavMenu>
      <button type="button" onClick={handleLogout}>
        logout
      </button>
    </Container>
  );
};

export default Navbar;
