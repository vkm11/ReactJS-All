import './App.css';
import React from 'react'
import {Table} from 'react-bootstrap'
function App()
{
  const users = [
    { name: 'Vijay', email: 'vijay@gmail.com', address:[
       { Hn:'110',city:'sadalga', country:'india'},
       { Hn:'120',city:'bedkihal', country:'india'},
       { Hn:'130',city:'belagavi', country:'india'},
       { Hn:'140',city:'bangalore', country:'india'}
    ]},
    
    { name: 'Kumar', email: 'kumar@gmail.com', address:[
       { Hn:'101',city:'Janawad', country:'india'},
       { Hn:'102',city:'Chikodi', country:'india'},
       { Hn:'103',city:'Nipani', country:'india'},
       { Hn:'104',city:'Belgaum', country:'india'}
    ]},
  ]
  return(
     <div className="App">
        <h1>List with nested array</h1>
         <Table variant="black" striped>
            <tbody>
               <tr>
                  <td>Name</td>
                  <td>Email</td>
                  <td>Address</td>
               </tr>
             </tbody>
             {
                users.map((item)=>
                <tr>
                   <td>{item.name}</td>
                   <td>{item.email}</td>
                   <td>{
                     item.address.map((data)=>
                     <tr>
     


         
      
