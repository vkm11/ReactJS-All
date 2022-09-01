
import './App.css';
import React from 'react'
class App extends React.Component{
  constructor(){
    super();
    console.log("constructor")
    this.state={
      // name:"Vijay"
      count:0
    }
  }
  componentDidUpdate(preProps, preState, snapshot)
  {
    // console.log("ComponentDidUpdate",preState.count, this.state.count)
    
    // example 3
    console.log("ComponentDidUpdate",snapshot)

    // example 1
    // if(preState.count === this.state.count)
    // {
    //   alert("data is already Same")
    // }


    // example 2 print 10 time
    if(this.state.count<10)
    {
      this.setState({count:this.state.count+1})
    }
  }
  render(){
    // console.log("render")
    return(
      <div className='App'>
        <h1>Componet Did Update {this.state.count}</h1>
        {/* <button onClick={()=>{this.setState({name:"Vijaykumar"})}}>Update Name</button> */}
        {/* <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update Name</button> */}
        <button onClick={()=>{this.setState({count:1})}}>Update Name</button>
      </div>
    );
  }

}

export default App;
