import React, { createContext, useEffect, useState } from 'react';
import { api } from '../services';
import { Loading } from '../components';
import showAlert from '../utils/helpers/Alert';

interface AuthContextData {
  signed: boolean;
  signIn(x: { user: string; password: string }): Promise<void>;
  handleLogout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('oi');
    const token = localStorage.getItem('token');
    console.log('useEffecttoken:', token);

    if (token !== null) {
      if (token !== 'undefined') {
        console.log('token dentro>', token);
        setAuthenticated(true);
      }
    }

    setLoading(false);
  }, []);

  const signIn = async (x: {
    user: string;
    password: string;
  }): Promise<void> => {
    try {
      const {
        data: { token, auth },
      } = await api.post('/Login', {
        user: x.user,
        password: x.password,
      });
      api.defaults.headers.Authorization = `Bearer ${token}`;
      localStorage.setItem('token', JSON.stringify(token));
      if (auth) {
        showAlert({ message: 'login efetuado com sucesso', type: 'success' });
      } else {
        showAlert({ message: 'Email ou senha incorreto', type: 'error' });
      }
      setAuthenticated(auth);
    } catch (error) {
      console.log('error login', error);
    }
  };

  const handleLogout = (): void => {
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <AuthContext.Provider
      value={{ signed: authenticated, signIn, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
