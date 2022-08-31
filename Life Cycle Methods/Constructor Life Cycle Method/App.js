{/* class component */}

import './App.css';
import React from 'react'
class App extends React.Component
{
  constructor() // first call
  {
    super();
    // console.log("constructor")
    this.state={
      data:"Anil"
    }
  }
  render() // after constructor call
  {
   // console.log("render")
    return(
      <h1>Hello World{this.state.data}</h1>
    )
  }
}
export default App;
