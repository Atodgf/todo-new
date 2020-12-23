import React from 'react'
import './App.css';
import Fcomponent from './Fcomponent';
import Ccomponent from './Ccomponent';


function App() {
  const todos = [
    {id:1, firstname: 'sad', lastname:'asd'},
    {id:2, firstname: 'qwe', lastname:'ewq'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Fcomponent todos={todos}/>
        <Ccomponent />
      </header>
    </div>
  );
}

export default App;
