import React, { useState } from 'react'
import Movie from './components/Movie'

function App() {
  const [movieTitle, setMovieTitle] = useState('')
  const [movieYear, setMovieYear] = useState('')
  const [movies, setMovies] = useState([
    { title: 'TimLee1', year: 2000 },
    { title: 'TimLee2', year: 2001 },
    { title: 'TimLee3', year: 2002 },
    { title: 'TimLee4', year: 2003 },
    { title: 'TimLee5', year: 2004 },
  ])
  const onSubmit = e => {
    e.preventDefault()
    setMovies([...movies, { 'title': movieTitle, 'year': movieYear }])
    setMovieTitle('')
    setMovieYear('')
  }

  const renderMovies = movies.map((movie, idx) => {
    return <Movie movie={movie} key={idx} />
  })

  return (
    <div className="App">
      <h1>Movie List</h1>
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
      {renderMovies}
    </div>
  )
}

export default App
