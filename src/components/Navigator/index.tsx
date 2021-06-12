import React, { useState } from 'react';
import { Container, ContainerSelect, Select } from './styles';
import RegisterUser from '../RegisterUser';
import UserList from '../UserList';

const Navigator: React.FC = () => {
  const [state, setState] = useState(true);

  const handleChangeUser = (): void => {
    setState(true);
  };
  const handleChangeList = (): void => {
    setState(false);
  };

  return (
    <Container>
      <ContainerSelect>
        <Select onClick={handleChangeUser}>Cadastrar Novo Usuário</Select>
        <Select onClick={handleChangeList}>Lista de Usuários</Select>
      </ContainerSelect>
      {state ? <RegisterUser /> : <UserList />}
    </Container>
  );
};

export default Navigator;
