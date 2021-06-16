import React from 'react';
import { Navbar, Login } from '../../components';

import { Container, LoginContainer } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <LoginContainer>
        <Login />
      </LoginContainer>
    </Container>
  );
};

export default Home;
