import React, { useContext } from 'react';
import { Button, Container, LogoMenu, Navlinks, NavMenu } from './styles';
import Logo from '../../assets/logoSpace3.png';
import { MenuItems } from './menuItems';
import { api } from '../../services';
import AuthContext from '../../Context/AuthContext';

const Navbar: React.FC = () => {
  const handleLogout = (): void => {
    localStorage.removeItem('token');
    api.defaults.headers.Autjorization = undefined;
    window.location.reload();
  };
  const { signed } = useContext(AuthContext);
  return (
    <Container>
      <LogoMenu>
        <img src={Logo} alt="ImageLogo" width="120" height="78" />
      </LogoMenu>
      <NavMenu>
        {/* {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Navlinks href={item.url}>{item.title}</Navlinks>
            </li>
          );
        })} */}
        {signed ? (
          <Button type="button" onClick={handleLogout}>
            logout
          </Button>
        ) : (
          <div />
        )}
      </NavMenu>
    </Container>
  );
};

export default Navbar;
