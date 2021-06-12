import React, { useState, useEffect } from 'react';
import { Container, Table, Tr, Th } from './styles';

import { api } from '../../services';

const UserList: React.FC = () => {
  const [users, setUsers] = useState<UserType>([]);

  useEffect(() => {
    const loadUsers = async (): Promise<void> => {
      const response = await api.get('/');
      setUsers(response.data);
    };
    loadUsers();
  }, []);

  return (
    <Container>
      <Table>
        <Tr>
          <Th>Nome</Th>
          <Th>Usuário</Th>
          <Th>E-mail</Th>
          <Th>Senha</Th>
        </Tr>
        {users.map((user, index) => (
          <Tr key={index}>
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
