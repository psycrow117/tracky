import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
