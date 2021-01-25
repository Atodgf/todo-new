import React from 'react'
import './App.css';
import Ccomponent from './Ccomponent';


function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <Ccomponent props={props}/>
      </header>
    </div>
  );
}

export default App;
