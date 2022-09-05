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
        <tbody>
      <tr>
        <td>Name</td>
        <td>Email</td>
        <td>Contact</td>
      </tr>
      {
        users.map((item, i)=>
        item.contact ==='111'?
        <tr key={i}>
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
