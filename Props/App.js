
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

// import React,{useState} from 'react'
// import './App.css';
// import Student from './Student'
// function App() {
//   const [name,setName]=useState("Mane")
//   return (
//     <div className="App">
//       <h1>Props in React :)</h1>
//       <Student name={name} />
//       <button onClick={()=>{setName("Vijay")}}>Update Name</button>
//     </div>
//   );
// }

// export default App;





//### Props Class Component

import './App.css';
import Student from './Student';
import React from 'react';
class App extends React.Component{

  constructor()
  {
    super();
    this.state={
      name:"VijayKumar"
    }
  }
  render()
  {
    return(
      <div className="App">
        <h1>Props Class Compoent !</h1>
        {/* <Student name="Kumar" email="kumar@gmail.com"></Student> */}

        <Student name={this.state.name} email="vijay@gmail.com"></Student>
        <button onClick={()=>this.setState({name:"Mane"})}>Update Name</button>    
      </div>
    )
  }
}
export default App;
