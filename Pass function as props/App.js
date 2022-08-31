import './App.css';
import User from './User';
function App(){
  function getData()
  {
    alert("hello from app")
  }
  return(
    <div className="App">
      <h1> Pass function as props </h1>
     <div style={{float:'right'}}>
      <User data={getData} />
     </div>
    </div>
  );
}
export default App;
