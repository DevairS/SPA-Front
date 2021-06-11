import React, { useEffect, useState } from 'react';
import Login from '../Login';
import Navigator from '../Navigator';

import { Container } from './styles';

const Main: React.FC = () => {
  const [onLogin, setOnLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setOnLogin(true);
    }
  }, []);

  return <Container>{onLogin ? <Navigator /> : <Login />}</Container>;
};

export default Main;
