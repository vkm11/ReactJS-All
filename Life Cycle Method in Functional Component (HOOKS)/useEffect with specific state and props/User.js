// Example: 2

import './App.css';
import React,{useEffect, useState} from 'react'
function App() {
  const [data,setData]=useState(10);
  const [count,setCount]=useState(100);

  useEffect(()=>{
    console.log("useEffect called")
  },[data])// specific data inside call  needs to be used User.js

  return (
    <div className="App">
      <h1>useEffect with specific props and state</h1>
      <h1>Count : {count}</h1>
      <h1>Data : {data}</h1>
    </div>
  );
}

export default App;
