import React, { useState, useEffect } from 'react';
import {
  Container,
  ContainerCard,
  Card,
  ImageAvatar,
  ContainerCarousel,
  InfosCard,
  ContainerAvatar,
  TextName,
  Text,
} from './styles';
import avatar from '../../assets/pessoa.jpeg';
import { api } from '../../services';

const UserList: React.FC = () => {
  const [users, setUsers] = useState<UserList>([]);

  useEffect(() => {
    const loadUsers = async (): Promise<void> => {
      const response = await api.get('/');
      setUsers(response.data);
    };
    loadUsers();
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 5000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 800 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1,
    },
  };

  return (
    <Container>
      <ContainerCard>
        <ContainerCarousel responsive={responsive}>
          {users.map((user, index) => {
            return (
              <Card key={index}>
                <InfosCard>
                  <TextName>{user.name}</TextName>
                  <Text>{user.email}</Text>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </Text>
                </InfosCard>
                <ContainerAvatar>
                  <ImageAvatar
                    src={avatar}
                    alt="avata"
                    width="78"
                    height="78"
                  />
                </ContainerAvatar>
              </Card>
            );
          })}
        </ContainerCarousel>
      </ContainerCard>
    </Container>
  );
};

export default UserList;
