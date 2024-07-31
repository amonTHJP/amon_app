import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <h1>Amon</h1>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/login">Login</Link></li> 
                <li><a id='username'></a></li>
            </ul>
        </nav>
    );
};

export default Navbar;