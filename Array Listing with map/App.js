import './App.css';

// const students=["vijay","kumar","Vijaykumar", "Mane"];

const students=[
  { name:"vijay", email:"vijay@gmail.com", contact_No:"8930723479"},
  { name:"kumar", email:"kumar@gmail.com", contact_No:"893345345"},
  { name:"vijaykumar", email:"vijaykumar@gmail.com", contact_No:"8930235673"},
]

function App() {
  return (
    <div className="App">
     <h1>Handle Array with List</h1>

     {/* Map */} 
     
     <table border="1">
     <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Contact_No</td>
      </tr>
     {
      students.map((data)=>
        <tr>
          <td>{data.name}</td>
          <td>{data.email}</td>
          <td>{data.contact_No}</td>
        </tr>
      )
     }

     </table>
    
    </div>
  );
}

export default App;
