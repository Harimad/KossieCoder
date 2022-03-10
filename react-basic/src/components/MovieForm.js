import React, { useState } from 'react'

const MovieForm = ({ addMovie }) => {
  const [movieTitle, setMovieTitle] = useState('')
  const [movieYear, setMovieYear] = useState('')

  const resetInput = () => {
    setMovieTitle('')
    setMovieYear('')
  }

  const onSubmit = e => {
    e.preventDefault()
    addMovie({ id: Date.now(), title: movieTitle, year: movieYear })
    resetInput()
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="MovieTitle"
        value={movieTitle}
        onChange={e => setMovieTitle(e.target.value)}
      />
      <input
        placeholder="MovieYear"
        value={movieYear}
        onChange={e => setMovieYear(e.target.value)}
      />
      <button type="submit">영화추가</button>
    </form>
  )
}

export default MovieForm
