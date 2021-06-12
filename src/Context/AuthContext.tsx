import React, { createContext, useState } from 'react';
import { api } from '../services';

interface AuthContextData {
  signed: boolean;
  signIn(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  const signIn = async (): Promise<void> => {
    try {
      const {
        data: { token, auth },
      } = await api.post('/Login', {
        user: 'devair',
        password: '123',
      });
      console.log('token:', token);
      setAuthenticated(auth);
      localStorage.setItem('token', JSON.stringify(token));
      api.defaults.headers.Authorization = token;
    } catch (error) {
      console.log('erro');
    }
  };

  return (
    <AuthContext.Provider value={{ signed: authenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
