# Send data child to parent / Lifting State Up
- it is also known as Lifting State Up 
- 


# Send data Parent to Child
- App.js

import './App.css';
import React from 'react'
import User from './User'
function App() {
  let data="Vijaykumar Mane"
  return (
    <div className="App">
      
      <h1>Lifting State Up</h1>
      <User name={data} />
    </div>
  );
}

export default App;


- User.js

function User(props)
{
    return(
        <div>
            <h1>User Name: {props.name}</h1>
            <button>Click me</button>
        </div>
    )
}
export default User;


## Send Data Child to Parent

- App.js


import './App.css';
import React from 'react'
import User from './User'
function App() {
  function parentAlert(data)
  {
    console.log(data)
    alert(data.name);
  }

  return (
    <div className="App">
      
      <h1>Lifting State Up</h1>
      <User alert={parentAlert}/>
    </div>
  );
}

export default App;


- User.js

function User(props)
{
    const data={name: "vijaykuamr", email:"vijay@gmail.com"}
    return(
        <div>
            <h1>User Name: </h1>
            <button onClick={()=>props.alert(data)}>Click me</button>
        </div>
    )
}
export default User; 

