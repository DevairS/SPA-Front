import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Container } from './styles';
import RegisterUser from '../RegisterUser';
import UserList from '../UserList';

const Navigator: React.FC = () => {
  const [state, setState] = useState(false);

  const handleChangeUser = (): void => {
    setState(true);
  };
  const handleChangeList = (): void => {
    setState(false);
  };

  return (
    <Container>
      <Tabs>
        <Tab label="Cadastrar Usuário" onClick={handleChangeUser} />
        <Tab label="Lista de Usuários" onClick={handleChangeList} />
      </Tabs>
      {state ? <RegisterUser /> : <UserList />}
    </Container>
  );
};

export default Navigator;
