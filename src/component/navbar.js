
import React from 'react';
import '../component/navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container containerr">
                <input type="checkbox" name="" id="" />
                <div className="hamburger-lines">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>
                <ul className="menu-items">
                    <li><a href="home">Home</a></li>
                    <li><a href="gallery">View Gallery</a></li>
                    <li><a href="booking">Book Event</a></li>
                    <li><a href="f">Feedback</a></li>
                    
                    
                    <li><a href='/login' class='login-btn' type="button">Login</a></li>

                   

                </ul>
                <h1 className="logo">EventFlow</h1>
            </div>
        </nav>
    );
}

export default Navbar;
