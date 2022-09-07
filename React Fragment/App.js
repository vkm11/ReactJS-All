
import './App.css';
import React from 'react'
import Cols  from './Cols';
function App() {
  return (
    <div>
      <h1>React Fragments</h1>
      <table>
        <tbody>
          <tr>
            <Cols />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
