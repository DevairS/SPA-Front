import React from 'react';
import { Users } from '../../Database';
import { Container, Table, Tr, Th } from './styles';

const UserList: React.FC = () => {
  return (
    <Container>
      <Table>
        <Tr>
          <Th>Codigo</Th>
          <Th>Nome</Th>
          <Th>Usuário</Th>
          <Th>E-mail</Th>
          <Th>Senha</Th>
        </Tr>
        {Users.map((user) => (
          <Tr>
            <Th>{user.id}</Th>
            <Th>{user.name}</Th>
            <Th>{user.user}</Th>
            <Th>{user.email}</Th>
            <Th>{user.password}</Th>
          </Tr>
        ))}
      </Table>
    </Container>
  );
};

export default UserList;
