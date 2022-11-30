import './App.css';
import { useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import NavBar from '../pages/NavBar'
import ActorListPage from '../pages/ActorListPage'
import MoviesListPage from '../pages/MoviesListPage'
import LoginPage from '../pages/LoginPage'
import {movies} from '../data'

function App() {
  const [user, setUser] = useState({})

  return (
    <main className='App'>
      {user ?
      <>
        <NavBar />
        <Routes>
          <Route path='/actors' element={<ActorListPage/>}/>
          <Route path='/' element={<MoviesListPage/>}/>
        </Routes>
      </>
      :
      <LoginPage setUser={setUser}/>
      }
    </main>
    
  );
}

export default App;
