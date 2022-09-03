import './App.css';
import React,{useEffect, useState} from 'react'
function App(props) {    //props send
//   useEffect(()=>{
//     console.log("useEffect called")
//   })


    useEffect(()=>{
        alert("count is "+props.count)
        
    },[props.count])// specific data call needs to be used User.js
    useEffect(()=>{
        alert("Data is "+props.data)
        
    },[ props.data])// specific data call needs to be used User.js
    
  return (
    <div className="App">
      <h1>Count Props : {props.count}</h1>
      <h1>Data Props: {props.data}</h1>
    </div>
  );
}

export default App;
