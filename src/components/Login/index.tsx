import React, { useContext, useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import AuthContext from '../../Context/AuthContext';

import {
  Button,
  ButtonLogin,
  Container,
  ContainerRight,
  ContainerSwap,
  Error,
  Form,
  Input,
  Label,
} from './styles';
import RegisterUser from '../RegisterUser';

const Login: React.FC = () => {
  const { signed, signIn } = useContext(AuthContext);
  const [register, setRegister] = useState(false);
  const [state, setState] = useState(false);

  const handleClose = (): void => {
    setState(false);
  };

  const handleLogin = (): void => {
    setRegister(true);
  };

  return (
    <Container>
      <Snackbar
        open={state}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        onClose={handleClose}
        autoHideDuration={4000}
      >
        <Alert severity="error">Usuário não encontrado!!!</Alert>
      </Snackbar>

      {register ? (
        <RegisterUser />
      ) : (
        <ContainerRight>
          <Formik
            initialValues={{ user: '', password: '' }}
            onSubmit={async (values) => {
              await new Promise((resolve) => setTimeout(resolve, 500));
              signIn(values);
              if (signed !== true) {
                setState(true);
              }
            }}
            validationSchema={Yup.object().shape({
              user: Yup.string().required('Campo Obrigatório'),
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
                  <Label>Login</Label>
                  <Input
                    id="user"
                    placeholder="Entre com seu login"
                    type="text"
                    value={values.user}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.user && touched.user
                        ? 'text-input error'
                        : 'text-input'
                    }
                  />
                  {errors.user && touched.user && <Error>{errors.user}</Error>}

                  <Label>Senha</Label>
                  <Input
                    id="password"
                    placeholder="Entre com sua senha"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.password && touched.password
                        ? 'text-input error'
                        : 'text-input'
                    }
                  />
                  {errors.password && touched.password && (
                    <Error>{errors.password}</Error>
                  )}
                  <Button type="submit">Submit</Button>
                  <ContainerSwap>
                    <ButtonLogin onClick={handleLogin}>
                      Faça seu cadastro
                    </ButtonLogin>
                  </ContainerSwap>
                </Form>
              );
            }}
          </Formik>
        </ContainerRight>
      )}
    </Container>
  );
};

export default Login;
