import './App.css'
import React, {useEffect, useState} from 'react'
function App()
{
  const [count, setCount]=useState(0)
  useEffect(()=>{
    console.log("work 1")
  })
  return(
    <div className="App">
      <h1>useEffect in React {count} </h1>
      <button onClick{()=>setCount(count+1)}> update counter</button
    </div>
  );
}
export default App;
