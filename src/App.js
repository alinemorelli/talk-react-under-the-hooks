import React from 'react';
import './App.css';
import HookCat from './hookCat'
import StateCat from './StateCat'

function App() {
  return (
    <div className="App" style={{padding: '50px 0'}}>
        <h2>Class Component: </h2>
        <StateCat />
        <hr style={{margin: '50px 0'}} />
        <h2>Hooks: </h2>
        <HookCat />
    </div>
  );
}

export default App;
