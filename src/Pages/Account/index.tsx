import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import RegisterUser from '../../components/RegisterUser';
import UserList from '../../components/UserList';

import { Container, ContainerSelect, Select } from './styles';

const Account: React.FC = () => {
  const [state, setState] = useState(true);

  const handleChangeUser = (): void => {
    setState(true);
  };
  const handleChangeList = (): void => {
    setState(false);
  };
  return (
    <Container>
      <Navbar />
      <ContainerSelect>
        <Select onClick={handleChangeUser}>Cadastrar Novo Usuário</Select>
        <Select onClick={handleChangeList}>Lista de Usuários</Select>
      </ContainerSelect>
      {state ? <RegisterUser /> : <UserList />}
    </Container>
  );
};

export default Account;
