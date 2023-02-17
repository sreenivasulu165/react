import React, { useState } from 'react'
import { useEffect } from 'react'
import Axios from 'axios'
import UserList from './UserList'
import UserDetails from './UserDetails'
const User=()=> {
  let [Users, setUsers] = useState({})
  let [selectedUser, setSelectedUser] = useState({})
  
    // console.log(sel)
  

  useEffect(() => {
    Axios.get('https://dummyjson.com/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err)=>{

      })
  },[])
  let selectedUserHandle = (user) => {
    setSelectedUser(user)
  }
  return (
    <div className='container'>
      <div className='row'>
        <h2>use App</h2>
        <pre>{JSON.stringify(Users)}</pre>
        <div className='col-md-8'>
          {
            Object.keys(Users).length > 0 ? <>
              <UserList user={Users.users} selectedUser={selectedUserHandle}/> </> : null
          }
        </div>
        <div className='col-md-4'>
          {
            Object.keys(selectedUser).length > 0 ? <>
              <UserDetails selectedUser={selectedUser}/> </> : null
          }
        </div>

      </div>

    </div>
  )
}

export default User