# Pure Component with state and props

# Pure Component
 - it can be used only class component
 
 - it compare to state name same or not privious and current, 2 name same means it will not re-rendring, 2 name deffirent deffirent means component re-rendring is posible

## Here Component will rerender (without pure Component) using State
- App.js

import React from 'react'
import './App.css';

class App extends React.Component {
  constructor()
  {
    super();
    this.state={
      count:1
    }
  }
  render()
  {
    console.log("Check re-rendring")
    return (
      <div className="App">
        <h1>Pure Component in React {this.state.count}</h1>
        <button onClick={()=>this.setState({count:this.state.count+1})}>Update Count</button>
      </div>
    );
  }
}
export default App;


- Output Check in Console



## With Pure Component using State
- Data same means does't re-render
- only one time render

- App.js

import React, { PureComponent } from 'react'
import './App.css';

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
    console.log("Check rerendring")
    return (
      <div className="App">
        <h1>Pure Component in React {this.state.count}</h1>
        {/* <button onClick={()=>this.setState({count:1})}>Update Count</button> */}
        <button onClick={()=>this.setState({count:this.state.count+1})}>Update Count</button>
      </div>
    );
  }
}
export default App;




# pure component with Props
- first we create one more component (User.js)

- App.js

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


- User.js
import React, { PureComponent } from 'react'
import './App.css';

class User extends PureComponent {
  
  render()
  {
    console.log("user component check-rerendring")
    return (
      <div className="App">
        <h1>User Component {this.props.count}</h1>
        
      </div>
    );
  }
}
export default User;


## useMemo (Hook)
- it can be used only function component
