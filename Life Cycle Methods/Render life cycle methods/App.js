import './App.css';
import User from './User'
import React from 'react'

function App()
{
   const [name, setName]=React.useState("vijay")
   return (
     <div className="App">
       <h1>Render Method in React </h1>
       <User name={name}  />
       <button onClick={()=>setName("vijay")}>Update Name</button>
     </div>
   );
}
export default App;
