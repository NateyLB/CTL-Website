import React from 'react';
import './App.css';

import Nav from './components/Nav.js';
import About from './components/About.js';

function App() {
  return (
    <div >
      <header >
       <Nav/>
      </header>
       <About/>
    </div>
  );
}

export default App;
