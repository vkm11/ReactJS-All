# Bootstrap List
## Bootstrap install
- npm install react-bootstrap bootstrap

## Import Css file in(index.js)
- import 'bootstrap/dist/css/bootstrap.min.css';


### Example 2 :- Condition Apply
import './App.css';
import React from 'react'
import{Table} from 'react-bootstrap'
const users=[
  { name:"vijay", email:"vijay@gmail.com", contact_No:"8930723479"},
  { name:"kumar", email:"kumar@gmail.com", contact_No:"111"},
  { name:"vijaykumar", email:"vijaykumar@gmail.com", contact_No:"8930235673"},
]
function App() {
  return (
    <div className="App">
      <h1>Bootstrap Table</h1>
      <Table striped variant='dark'>
        <tbody>                         // tbody
      <tr>
        <td>Name</td>
        <td>Email</td>
        <td>Contact</td>
      </tr>
      {
        users.map((item, i)=>            // define index
        item.contact ==='111'?
        <tr key={i}>                     // apply index
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.contact_No}</td>
        </tr>:null
        )
      }
      </tbody>
      </Table>
    </div>
  );
}

export default App;



ERROR SOl:-  <tbody> and apply index
  
