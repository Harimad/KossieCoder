import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import UserList from '../components/UserList'
import Spinner from '../components/Spinner'

const Users = () => {
  const [users, setUsers] = useState([])
  const [spinner, setSpinner] = useState(true)

  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
      setUsers(response.data)
      setSpinner(!spinner)
    })
  }, [])
  return (
    <>
      <h1>Users</h1>
      {spinner ? <Spinner /> : <UserList users={users} />}
    </>
  )
}

export default Users
