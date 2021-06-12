import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import { AuthProvider } from './Context/AuthContext';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Main />
      <Footer />
    </AuthProvider>
  );
};

export default App;
