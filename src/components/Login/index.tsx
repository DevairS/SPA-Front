import React from 'react';
import imageLogin from '../../assets/imageLogin.jpg';
import {
  Container,
  ContainerLeft,
  ContainerRight,
  Form,
  Image,
  Input,
  Label,
} from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <ContainerLeft>
        <Form>
          <Label>Login</Label>
          <Input />
          <Label>Senha</Label>
          <Input />
        </Form>
      </ContainerLeft>
      <ContainerRight>
        <Image src={imageLogin} alt="Logo" width="500" height="700" />
      </ContainerRight>
    </Container>
  );
};

export default Login;
