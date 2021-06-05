import React from 'react';
import { Container, LogoMenu, Navlinks, NavMenu } from './styles';
import Logo from '../../assets/logo.png';
import { MenuItems } from './menuItems';

const Navbar: React.FC = () => {
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
    </Container>
  );
};

export default Navbar;
