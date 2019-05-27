import React from 'react';
import logo from './logo.svg';
import './App.css';

import RegisterUser from "./components/RegisterUser";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      	<RegisterUser />
      </header>
    </div>
  );
}

export default App;
