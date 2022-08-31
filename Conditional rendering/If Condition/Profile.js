import {useState} from 'react'
function Profile()
{
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <div>
      <h1>Profile Component</h1>
      {
        loggedIn?       // if
        <h1> Welcome Vijay</h1>
        :<h1> Welcome Guest</h1>    //else  
      } 
    </div>
  )
}
export default Profile;



{/* Example - 2 
Else-If */}

{/*  
import {useState} from 'react'
function Profile()
{
  const [loggedIn, setLoggedIn] = useState(3)
// 1,2,3
  return (
    <div>
      <h1>Profile Component</h1>
      {
        loggedIn==1?       // if
        <h1> Welcome User1</h1>
        :loggedIn==2?<h1> Welcome User2</h1>
        :<h1>Welcome User3 </h1>
      } 
    </div>
  )
}
export default Profile
  */}
