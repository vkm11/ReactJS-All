# Array Listing with map
## Project Creating
- npx create-react-app arraylist-with-map


## Project Run
- npm start


## Imp
- Why for loop is not using because return function can support map only.


# App.js (Example-1)
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
