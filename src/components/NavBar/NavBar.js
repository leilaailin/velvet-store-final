import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import {NavLink} from 'react-router-dom';

const NavBar = () =>{
    return(
        <nav id="headerNavBar">
            <ul>
                <li><NavLink to='/'>Inicio</NavLink></li>
                <li><NavLink to='/productos'>Productos</NavLink></li>
                <li><NavLink to='/nosotros'>Nosotros</NavLink></li>
            </ul>
            <NavLink to='/Cart'><CartWidget /></NavLink>
        </nav>
    )
}

export default NavBar;