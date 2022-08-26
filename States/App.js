
// import './App.css';
// import Student from './Student'
// function App() {
//   return (
//     <div className="App">
//       <h1>Props in React :)</h1>
//       <Student name={"vijay"} />
//       {/* <Student  name="Vijay" email="vijay@gmail.com" others={{address:"Belagavi", mobile:"810534"}}/>
//       <Student  name="Kumar" email="kumar@gmail.com" others={{address:"Jan", mobile:"9871034"}}/> */}
//     </div>
//   );
// }

// export default App;


// ### How to Change Data

import React,{useState} from 'react'
import './App.css';
import Student from './Student'
function App() {
  const [name,setName]=useState("Mane")
  return (
    <div className="App">
      <h1>Props in React :)</h1>
      <Student name={name} />
      <button onClick={()=>{setName("Vijay")}}>Update Name</button>
    </div>
  );
}

export default App;

