import React from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Login />
      <Footer />
    </>
  );
};

export default App;