import React, { useContext } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import AuthContext from '../../Context/AuthContext';
import imageLogin from '../../assets/imageLogin.jpg';
import {
  Container,
  ContainerLeft,
  ContainerRight,
  Form,
  Image,
} from './styles';

const Login: React.FC = () => {
  const { signed, signIn } = useContext(AuthContext);
  console.log(signed);

  const [state, setState] = React.useState(false);

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
        <Alert severity="error">Usuário não encontrado!!!</Alert>
      </Snackbar>
      <ContainerLeft>
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
                <p>Login</p>
                <input
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
                {errors.user && touched.user && (
                  <div className="input-feedback">{errors.user}</div>
                )}

                <p>Senha</p>
                <input
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
                  <div className="input-feedback">{errors.password}</div>
                )}
                <button type="submit">Submit</button>
              </Form>
            );
          }}
        </Formik>
      </ContainerLeft>
      <ContainerRight>
        <Image src={imageLogin} alt="Logo" width="500" height="500" />
      </ContainerRight>
    </Container>
  );
};

export default Login;
