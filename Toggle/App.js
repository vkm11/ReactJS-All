import React from 'react';
import './App.css';
class App extends React.Component{
  constructor(){
    super();
    this.state={
      show:true
    }
  }
  render(){
    return(
      <div>
        {
          this.state.show ?
          <h1>Hide and Show</h1>
          :null
        }
        {/* <button onClick={()=>this.setState({show:false})}>Toggle Me</button> */}
        <button onClick={()=>this.setState({show:!this.state.show})}>Toggle Me</button>
      </div>
    )
  }
}


export default App;
