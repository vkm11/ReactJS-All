
//## State in Functional Component

// import {useState} from 'react' //First need to be import State ## In Function Component

// import './App.css';

// function App() {
//   // const[data,setData]=useState("Mane")
//   const[data,setData]=useState(0)
//   function updateData(){
//     // setData("Vijay")
//     setData(data+1)
//   }
//   console.log("-------")
//   return (
//     <div className="App">
//      <h1>{data}</h1>
//      <button onClick={updateData}>Update Data</button>
//     </div>
//   );
// }

// export default App;





//## State in Class Component

import React,{Component} from "react"
import './App.css'
class App extends Component{

  constructor(){
    super();
    this.state={
      // data:"Vijay"
      data:1
    }
  }
  apple(){
    // alert("Apple")
    // this.setState({data:"Mane"})
    this.setState({data:this.state.data+1})
  }
  render(){
    return(
      <div className="App">
        <h1>Hello State In Class Component</h1>
        <h1>{this.state.data}</h1>
        <button onClick={()=>this.apple()}>Update Data</button>
      </div>
    )
  }
}
export default App;
