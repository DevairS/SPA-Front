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
  // Input,
  // Label,
} from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <ContainerLeft>
        <Formik
          initialValues={{ login: '', senha: '' }}
          onSubmit={async (values) => {
            await new Promise((resolve) => setTimeout(resolve, 500));
            console.log(values);
          }}
          validationSchema={Yup.object().shape({
            login: Yup.string().required('Required'),
            senha: Yup.string().required('Required'),
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
                  className={
                    errors.senha && touched.senha
                      ? 'text-input error'
                      : 'text-input'
                  }
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
        <Image src={imageLogin} alt="Logo" width="500" height="700" />
      </ContainerRight>
    </Container>
  );
};

export default Login;
