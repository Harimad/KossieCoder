import React, { useState } from 'react'
import Movie from './components/Movie'
import MovieForm from './components/MovieForm'
import Navbar from './components/Navbar'
import Users from './pages/Users'
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
        <div className="container">
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
              <Users />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
