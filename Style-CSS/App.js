
import './App.css';
import style from './custom.module.css'
import './style.css'
function App() {
  return (
    <div className="App">
      <h1 className='primary'>Style in Reactjs type 1 (External style)</h1>        {/* style.css */}
      <h1 style={{color: 'red', backgroundColor: 'pink'}}>Style in Reactjs type 2 (Inline style)</h1>        
      <h1 className={style.success}>Style in Reactjs type 1 (External style)</h1>        
    
    </div>
  );
}

export default App;
