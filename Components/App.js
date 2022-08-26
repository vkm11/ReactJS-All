
import './App.css';
//01// import User from './User'
// import {User} from './User' //02

// Same file 2 function
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World !</h1>
//       <User />
//     </div>
//   );
// }
// function User(){
//   return(
//       <h1>Hello Component</h1>
//   )
// }
// export default App;
// import User from './User'
// function App() {

//   return (
//     <div className="App">
//       <h1>Hello World !</h1>
//       <User />
//     </div>
//   );
// }
// export default App;


//example 03- Class Component

// import User from './User'
// function App() {
//     function Apple(){
//         return(
//         <div>
//           Hi Vijay
//         </div>
//         )
//     }
//   return (
//     <div className="App">
//       <h1>Hello World !</h1>
//       <User />
//       <Apple />
//     </div>
//   );
// }
// export default App;


//  Example Click Event Button Call

function App()
{
    let data="VijayKumar Mane"
    function apple(){
        
        alert("Mane")
        // alert("function called");
    }
    return(
        <div className="App">
            <h1>{data}</h1>
            <button onClick={apple}>Click Me</button>
            {/* OR */}
            {/* <button onClick={()=>apple()}>Click Me</button> */}
        </div>
    )
}
export default App;
