import React, { useState } from 'react'
import Movie from './components/Movie'
import MovieForm from './components/MovieForm'

function App() {
  const [movies, setMovies] = useState([
    { title: 'TimLee1', year: 2000 },
    { title: 'TimLee2', year: 2001 },
    { title: 'TimLee3', year: 2002 },
    { title: 'TimLee4', year: 2003 },
    { title: 'TimLee5', year: 2004 },
  ])

  const renderMovies = movies.map((movie, idx) => {
    return <Movie movie={movie} key={idx} />
  })

  const addMovie = movie => {
    setMovies([...movies, movie])
  }

  return (
    <div className="App">
      <h1>Movie List</h1>
      <MovieForm addMovie={addMovie} />
      {renderMovies}
    </div>
  )
}

export default App
