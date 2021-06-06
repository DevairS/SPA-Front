/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import imageLogin from '../../assets/imageLogin.jpg';
import {
  Container,
  ContainerLeft,
  ContainerRight,
  Form,
  Image,
} from './styles';

type Props = {
  onLogin(): void;
};

const Login: React.FC<Props> = ({ onLogin }) => {
  return (
    <Container>
      <ContainerLeft>
        <Formik
          initialValues={{ login: '', senha: '' }}
          onSubmit={async (values) => {
            await new Promise((resolve) => setTimeout(resolve, 500));
            console.log(values);
            onLogin();
          }}
          validationSchema={Yup.object().shape({
            login: Yup.string().required('Campo Obrigatório'),
            senha: Yup.string().required('Campo Obrigatório'),
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
                  id="login"
                  placeholder="Entre com seu login"
                  type="text"
                  value={values.login}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.login && touched.login
                      ? 'text-input error'
                      : 'text-input'
                  }
                />
                {errors.login && touched.login && (
                  <div className="input-feedback">{errors.login}</div>
                )}
                <p>senha</p>
                <input
                  id="senha"
                  placeholder="Entre com sua senha"
                  type="text"
                  value={values.senha}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.senha && touched.senha && (
                  <div className="input-feedback">{errors.senha}</div>
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
