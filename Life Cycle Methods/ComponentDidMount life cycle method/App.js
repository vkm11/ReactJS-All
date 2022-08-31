import './App.css'
import React from 'react'
class App extends React.Component
{
  constructor()
  {
    super();
    this.state={
      name:"vijay"
    }
    console.log("constructor");
  }
  componentDidMount()
  {
    console.log("componentDidMount")
  }
  render()
  {
    console.log("render");
    return(
      <div className="App">
        <h1>Component Did Mount{this.state.name}</h1>
        <button onClick={()=>{this.setState({name:"Mane"})}}> Update Name</button>
      </div>
    );
  }
}
export default App;
