import React from 'react';
import './App.css';
import Menu from './Menu/Menu';
import Schedule from './Schedule/Schedule';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Старокостянтинівська школа №9, 1-Б клас
        </p>
      </header>
      <div className="App-blocks">
        <div className="App-menu">
          <Menu />
        </div>
        <div className="App-content">
          <Schedule />
        </div>
      </div>
    </div>
  );
}

export default App;
