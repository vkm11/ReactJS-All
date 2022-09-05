import './App.css';

const students=["vijay","kumar","Vijaykumar", "Mane"];

// map looping
students.map((item)=>{
  console.log("my Name is:",item)
});

// for loop
for(let i=0; i<students.length;i++)
{
  console.log("in for loop my name is:",students[i])
}
function App() {
  return (
    <div className="App">
     <h1>ArrayList With Map</h1>
    </div>
  );
}

export default App;
