import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { Container, Form, Input, Label, Error, Button } from './styles';
import { api } from '../../services';

const RegisterUser: React.FC = () => {
  const [state, setState] = useState(false);
  const handleClose = (): void => {
    setState(false);
  };

  return (
    <Container>
      <Snackbar
        open={state}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        onClose={handleClose}
        autoHideDuration={4000}
      >
        <Alert>Usuário cadastrado com sucesso!!!</Alert>
      </Snackbar>

      <Formik
        initialValues={{ name: '', user: '', email: '', password: '' }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          console.log(values);
          try {
            await api.post('/CreateUser', {
              name: values.name,
              user: values.user,
              password: values.password,
              email: values.email,
            });
            setState(true);
            window.location.reload();
          } catch (error) {
            console.log(error);
          }
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required('Campo Obrigatório'),
          user: Yup.string().required('Campo Obrigatório'),
          email: Yup.string().email().required('Campo Obrigatório'),
          password: Yup.string().required('Campo Obrigatório'),
        })}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
          } = props;
          return (
            <Form onSubmit={handleSubmit}>
              <Label>Nome</Label>
              <Input
                id="name"
                placeholder="Seu nome"
                type="text"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.name && touched.name
                    ? 'text-input error'
                    : 'text-input'
                }
              />
              {errors.name && touched.name && <Error>{errors.name}</Error>}

              <Label>Login</Label>
              <Input
                id="user"
                placeholder="Seu login"
                type="text"
                value={values.user}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.user && touched.user && <Error>{errors.user}</Error>}

              <Label>E-mail</Label>
              <Input
                id="email"
                placeholder="devairaugustodasilva@gmail.com"
                type="text"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && <Error>{errors.email}</Error>}

              <Label>Senha</Label>
              <Input
                id="password"
                placeholder="Sua senha"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password && (
                <Error>{errors.password}</Error>
              )}
              <Button type="submit">Cadastra</Button>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};

export default RegisterUser;
