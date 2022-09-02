import './App.css';
import React from 'react'
class App extends React.Component {
  constructor(){
    super();
    this.state={
      count:0
    }
  }
  shouldComponentUpdate()
  {
    console.log("shouldComponentUpdate", this.state.count);
    // example 1
    // return true; //because of this update the data 
  
  
    // example 2
    if(this.state.count>5 && this.state.count<10)
    {
      return true;
    }
  }
  render(){
    return (
      <div className="App">
        <h1>Should Component Update{this.state.count}</h1>
        <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update counter</button>
      </div>
    );
  }

}

export default App;
