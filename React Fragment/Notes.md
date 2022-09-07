# React Fragment 
## 3 way to write Fragment

### Ex.1) App.js
import './App.css';
import React from 'react'
function App() {
  return (
    <React.Fragment>
      <h1>React Fragments</h1>
      <h2>React Fragments</h2>
    </React.Fragment>
  );
}

export default App;

### Ex.2) App.js
import './App.css';
import React,{Fragment} from 'react'
function App() {
  return (
    <Fragment>
      <h1>React Fragments</h1>
      <h2>React Fragments</h2>
    </Fragment>
  );
}

export default App;

### Ex.3) App.js
import './App.css';
import React from 'react'
function App() {
  return (
    <>
      <h1>React Fragments</h1>
      <h2>React Fragments</h2>
    </>
  );
}

export default App;




## Why we use Fragment
### when we write child component div then it showing error
- becouse of this Error we can using fragment empty tag <> , </>
- Warning: validateDOMNesting(...): <td> cannot appear as a child of <div>
