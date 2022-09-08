import React,{useState} from 'react'
import './App.css';

function App() {
  // let [val,setVal]=useState("")  //this defaultvalue write down side
  let [val,setVal]=useState("0000") //here no need to write default value
  let [item,setItem]=useState("")
  return (
    <div className="App">
      <h1>Controled Component</h1>
      {/* <input type="text" value={val}  onChange={(e)=>setVal(e.target.value)} /> */}
      <input type="text"  value={val}  onChange={(e)=>setVal(e.target.value)} />
      {/* <input type="text"  defaultValue="0000"  onChange={(e)=>setVal(e.target.value)} /> */}
      {/* <input type="text" value={item}  onChange={(e)=>setItem(e.target.value)} /> */}
    <h3>Value {val}</h3>
    </div>
  );
}

export default App;
