import React from 'react'

const UsersList = (props) => {
  return (
    <ul>
      {props.users.map(user => { 
        if ( user.name !== '' && user.age !== ''  && user.age > 0){ 
            return <li key = {user.id}>{user.name} ({user.age} year's old )</li>
        }
        else return null ; 
      } )}
    </ul>
  )
}

export default UsersList
