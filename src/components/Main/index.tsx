import React, { useContext } from 'react';
import AuthContext from '../../Context/AuthContext';
import Login from '../Login';
import Navigator from '../Navigator';

import { Container } from './styles';

const Main: React.FC = () => {
  const { signed } = useContext(AuthContext);

  return <Container>{signed ? <Navigator /> : <Login />}</Container>;
};

export default Main;
