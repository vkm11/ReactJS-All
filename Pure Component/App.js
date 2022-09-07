import React, { PureComponent } from 'react'
import './App.css';
import User from './User'
class App extends PureComponent {
  constructor()
  {
    super();
    this.state={
      count:1
    }
  }
  render()
  {

    return (
      <div className="App">
        <User count={this.state.count} />
        {/* <button onClick={()=>this.setState({count:1})}>Update Count</button> */}
        <button onClick={()=>this.setState({count:this.state.count+1})}>Update Count</button>
      </div>
    );
  }
}
export default App;
