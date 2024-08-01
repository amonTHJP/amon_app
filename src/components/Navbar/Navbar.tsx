import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

interface NavbarProps {
    toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
    
    return (
        <nav className="navbar">
            <button className="sidebar-toggle" onClick={toggleSidebar}>
                ☰
            </button>
            <h1>Amon</h1>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/login">Login</Link></li> 
                <li><a id='username'></a></li>
            </ul>
        </nav>
    );
};

export default Navbar;