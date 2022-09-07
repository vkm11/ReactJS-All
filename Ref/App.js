
import React,{createRef} from 'react'
import './App.css';

class App extends React.Component{
  constructor()
  {
    super();
    this.inputRef=createRef();
  }
  componentDidMount()
  {
    // console.log(this.inputRef.current.value="1000")
  }
  getVal()
  {
    console.log(this.inputRef.current.value) //value get
    this.inputRef.current.style.color="red"
    this.inputRef.current.style.backgroundColor="black"
  }
  render()
  {
    return (
      <div className="App">
        <h1>Ref in React</h1>
        <input type="text" ref={this.inputRef}/>
        <button onClick={()=>this.getVal()}>Check Ref</button>
      </div>
    );
  }
 
}
export default App;
