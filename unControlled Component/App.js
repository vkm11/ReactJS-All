
import './App.css';
import React,{useRef} from "react"
function App() {
  let inputRef=useRef(null)
  let inputRef2=useRef(null)
  function submitForm(e)
  {
    e.preventDefault()
    console.log("input field 1 Value: ",inputRef.current.value)
    console.log("input field 2 Value: ",inputRef2.current.value)
    let input3=document.getElementById("input3").value
     console.log("input field 3 value:", input3)
  }
  return (
    <div className="App">
      <h1>UnControlled Component </h1>
      <form onSubmit={submitForm}>
        <input ref={inputRef} type="text" /> <br /><br /><br />
        <input ref={inputRef2} type="text" /> <br /><br /><br />
        <input id="input3" type="text" /> <br /><br /><br />
        <button>Submit</button>
      </form>
    </div>  
  );
}

export default App;
