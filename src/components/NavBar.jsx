import { Link } from "react-router-dom";




import '../styles/NavBar.css'

function Navbar() {
    return (

        
        <nav className="navBar">

            
            <ul className="nav-bar-ul">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/AboutPage">About</Link></li>
                <li><Link to="/photos">Photos</Link></li>
                <li><Link to="/LaikaPage">Laika</Link></li>
                <Link className='city-link' to='/AboutPage'> About </Link>
            </ul>
        </nav>
    );
}

export default Navbar;


