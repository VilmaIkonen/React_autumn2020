import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="content">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
