import React, { useEffect } from 'react'
import Axios from 'axios'

const Users = () => {
  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
      console.log(response)
    })
  }, [])
  return (
    <>
      <h1>Users</h1>
    </>
  )
}

export default Users
