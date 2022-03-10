import React, { useState } from 'react'
import Movie from './components/Movie'
import MovieForm from './components/MovieForm'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
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
  console.log(movies)

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/movies">
            <h1>Movie List</h1>
            <MovieForm addMovie={addMovie} />
            {renderMovies}
          </Route>
          <Route path="/" exact>
            <h1>Home</h1>
          </Route>
          <Route path="/users">
            <h1>Users</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
