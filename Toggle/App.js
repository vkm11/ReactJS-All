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



{/* Example : 2. */}

{/* 
import './App.css';
import React from 'react'
function App(){
   const [status, setStatus] = React.use state(true)
   return(
    <div className="App">
     {
       status?   
       <h1>Hello World!</h1>
       :null
     }
  //   <button onClick={()=>setStatus(false)}>Hide</button>
  //   <button onClick={()=>setStatus(true)}>Show</button>
     <button onClick={()=>setStatus(!status)}>Toggle</button>  
    </div>
   );
}
export default App;
*/}




