import React from 'react'
class User extends React.Component {
  render()
  {
     console.log("Render method", this.props)
     return (
       <div>
          <h1>User Component</h1>
       </div>
     )
   }
}
export default User;
