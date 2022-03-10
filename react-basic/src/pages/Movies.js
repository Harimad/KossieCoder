import React, { useState } from 'react'
import MovieForm from '../components/MovieForm'
import Movie from '../components/Movie'

const Movies = () => {
  const [movies, setMovies] = useState([])

  const removeMovie = id => {
    setMovies(movies.filter(movie => movie.id !== id))
  }

  const renderMovies = movies.length
    ? movies.map(movie => {
        return <Movie movie={movie} key={movie.id} removeMovie={removeMovie} />
      })
    : '영화를 추가해 주세요'

  const addMovie = movie => {
    setMovies([...movies, movie])
  }
  return (
    <>
      <h1>Movie List</h1>
      <MovieForm addMovie={addMovie} />
      {renderMovies}
    </>
  )
}
export default Movies
