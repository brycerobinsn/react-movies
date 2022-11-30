import './App.css';
import { useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import NavBar from '../components/NavBar'
import ActorListPage from '../components/ActorListPage'
import MoviesListPage from '../components/MoviesListPage'
import LoginPage from '../components/LoginPage'

function App() {
  const [user, setUser] = useState(null)
   const handleSubmit = async (evt) => {
    evt.preventDefault()
        const setUser = {...this.state}
    
}

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
      <LoginPage/>
      }
    </main>
    
  );
}

export default App;
