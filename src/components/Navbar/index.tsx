import React, { useContext } from 'react';
import { Button, Container, Image, LogoMenu, NavMenu } from './styles';
import Logo from '../../assets/logoSpace3.png';
import AuthContext from '../../Context/AuthContext';

const Navbar: React.FC = () => {
  const { signed, handleLogout } = useContext(AuthContext);
  return (
    <Container>
      <LogoMenu>
        <Image src={Logo} alt="ImageLogo" />
      </LogoMenu>
      <NavMenu>
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
