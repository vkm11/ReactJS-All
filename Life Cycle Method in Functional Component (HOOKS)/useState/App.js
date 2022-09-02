import '.App.css';
import React,{useState} from 'react'
function App()
{
  const [data,setData]=useState("Vijay")
  return(
    <div className="App">
      <h1>{data}</h1>
      <button onClick={()=>setData("vijaykumar")}>Update Data</button>
    </div>
  );
}
export default App;
