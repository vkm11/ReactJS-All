# useMemo Hook
:- this hook only used for function component.

- App.js

import React,{useState} from 'react'
import './App.css';

function App() {
  const [count, setCount]=useState(0);
  const [item, setItem]=useState(10);
  return (
    <div className="App">
      <h1>useMemo Hook- function component</h1>
      <h2>Count:{count}</h2>
      <h2>Item:{item}</h2>
      <button onClick={()=>setCount(count+1)}>Update Count</button>
      <button onClick={()=>setItem(item+1)}>Update Item</button>
    </div>
  );
}

export default App;
