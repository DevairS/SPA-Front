import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Container, Form } from './styles';

const RegisterUser: React.FC = () => {
  return (
    <Container>
      <Formik
        initialValues={{ name: '', user: '', email: '', password: '' }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          console.log(values);
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
              <p>Nome</p>
              <input
                id="name"
                placeholder="Devair Augusto da Silva"
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
              {errors.name && touched.name && (
                <div className="input-feedback">{errors.name}</div>
              )}

              <p>user</p>
              <input
                id="user"
                placeholder="DevairS"
                type="text"
                value={values.user}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.user && touched.user && (
                <div className="input-feedback">{errors.user}</div>
              )}

              <p>E-mail</p>
              <input
                id="email"
                placeholder="devairaugustodasilva@gmail.com"
                type="text"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}

              <p>Senha</p>
              <input
                id="password"
                placeholder="Sua senha"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password && (
                <div className="input-feedback">{errors.password}</div>
              )}
              <button type="submit">Cadastra</button>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};

export default RegisterUser;
