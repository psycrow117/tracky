import React from 'react';
import logo from '../logo.svg';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import '../css/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
