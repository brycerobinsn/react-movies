import './App.css';
import { useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import NavBar from '../components/NavBar'
import ActorListPage from '../pages/ActorListPage'
import MoviesListPage from '../pages/MoviesListPage'
import LoginPage from '../pages/LoginPage'
import {movies} from '../data'
import MovieDetailPage from '../pages/MovieDetailPage';

function App() {
  const [user, setUser] = useState({})

  return (
    <main className='App'>
      {user ?
      <>
        <NavBar user={user}/>
        <Routes>
          <Route path='/' element={<MoviesListPage/>}/>
          <Route path='/movies/:movieTitle' element={<MovieDetailPage/>}/>
          <Route path='/actors' element={<ActorListPage/>}/>
        </Routes>
      </>
      :
      <LoginPage setUser={setUser}/>
      }
    </main>
    
  );
}

export default App;
