import './App.css';
import React from 'react';
import {Button,Alert} from 'react-bootstrap'
function App() {
  return (
    <div className="App">
      <h1>How to Apply Bootstrap </h1>
      <Button onClick={()=>alert("Hello")}>Click me</Button>
      <>
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button> <Button variant="link">Link</Button>
    </>

      <div>
        <h1>Alerts</h1>
        {
          <Alert variant="warning">
            This is a warning alert—check it out!
          </Alert>
        }
      </div>

      
    </div>
    
  );
}

export default App;
