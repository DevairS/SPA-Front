import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
// import Footer from './components/Footer';
import { AuthProvider } from './Context/AuthContext';
import { Container } from './style/app';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Container>
        <Navbar />
        <Main />
      </Container>
    </AuthProvider>
  );
};

export default App;
