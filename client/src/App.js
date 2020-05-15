import React from 'react';
import logo from './logo.svg';
import './App.css';

import {useSelector, useDispatch} from 'react-redux'

function App() {
  const counter = useSelector((state) => state.counter); // Get state from redux
  const dispatch = useDispatch(); // dispatch actions
  return (
    <div className="App">
      <header className="App-header">
      <h1>Counter: {counter}</h1>
      <button onClick ={() => dispatch({type:"INCREMENT"})}>INCREMENT</button>
      <button onClick ={() => dispatch({type:"DECREMENT"})}>DECREMENT</button>

      </header>
    </div>
  );
}

export default App;
