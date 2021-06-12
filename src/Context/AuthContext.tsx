import React, { createContext, useEffect, useState } from 'react';
import { api } from '../services';
import Loading from '../components/Loading';

interface AuthContextData {
  signed: boolean;
  signIn(x: { user: string; password: string }): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
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

      setAuthenticated(auth);
      localStorage.setItem('token', JSON.stringify(token));
      api.defaults.headers.Authorization = token;
    } catch (error) {
      console.log('erro');
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <AuthContext.Provider value={{ signed: authenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
