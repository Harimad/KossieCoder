import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import UserList from '../components/UserList'
import Spinner from '../components/Spinner'
import { useParams } from 'react-router-dom'

const User = () => {
  const [user, setUser] = useState(null)
  const [spinner, setSpinner] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/users/' + id).then(
      response => {
        setUser(response.data)
        setSpinner(!spinner)
      }
    )
  }, [])
  return (
    <>
      <h1>User 정보</h1>
      {spinner ? <Spinner /> : null}
    </>
  )
}

export default User
