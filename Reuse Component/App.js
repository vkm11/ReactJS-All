import './App.css';
import React from 'react';
import User from './User'

function App() {
  const users=[
    {
      name: "Vijay", email:"vijay@gmail.com", contact:"111"
    },
    {
      name: "Nithin", email:"nithin@gmail.com", contact:"222"
    },
    {
      name: "Surya", email:"surya@gmail.com", contact:"333"
    },
    {
      name: "Kiran", email:"kiran@gmail.com", contact:"444"
    },
    {
      name: "Gourav", email:"gourav@gmail.com", contact:"555"
    },
  ]
  return (
    <div className="App">
      <h1>Reuse Component with list</h1>
      {
        users.map((item,i)=>
        <User data={item} />
        )
      }
    </div>
  );
}

export default App;
