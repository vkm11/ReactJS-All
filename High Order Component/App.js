import React, { useState} from 'react'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>High Order Component</h1>
      {/* <Counter />
      <Counter /> */}
      <HOCRed cmp={Counter} />
      <HOCGreen cmp={Counter} />
      <HOCBlue cmp={Counter} />
    </div>
  );
}
function HOCRed(props)
{
  return <h2 style={{backgroundColor:"red", width:"100px"}}>Red<props.cmp /></h2>
  
}
function HOCGreen(props)
{
  return <h2 style={{backgroundColor:"green", width:"100px"}}>Green<props.cmp /></h2>
 
}
function HOCBlue(props)
{
  return <h2 style={{backgroundColor:"blue", width:"100px"}}>Blue<props.cmp /></h2>
 
}
function Counter()
{
  const [count, setCount]=useState(0)
  return( 
    <div>
      <h2>{count}</h2>
      <button onClick={()=>setCount(count+1)}>Update </button>
    </div>
  )
}

export default App;
