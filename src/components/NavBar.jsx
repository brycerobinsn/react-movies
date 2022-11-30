import { Link } from 'react-router-dom'

export default function NavBar(){
    return (
        <nav>
            <Link to='/actors'>Actors</Link>
            &nbsp; | &nbsp;
            <Link to='/'>Movies</Link>
        </nav>
    )
}