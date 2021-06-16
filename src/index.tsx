import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { AuthProvider } from './Context/AuthContext';
import { SnackbarProvider } from './components/Snackbar';

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider />
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
