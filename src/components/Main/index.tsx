import React, { useState } from 'react';
import Login from '../Login';
import Navigator from '../Navigator';

import { Container } from './styles';

const Main: React.FC = () => {
  const [onLogin, setOnLogin] = useState(false);
  const handleLogin = (): void => {
    setOnLogin(true);
    console.log(onLogin);
  };
  return (
    <Container>
      {onLogin ? <Navigator /> : <Login onLogin={handleLogin} />}
    </Container>
  );
};

export default Main;
