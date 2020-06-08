import React from "react";
import { Link } from "react-router-dom"

const Nav = props =>{

    return(
        
        <nav className="nav">
            <a href="#about" >Home</a>
            <Link to="/gallery">
                Gallery
            </Link>
            <Link to="/contact">
                Contact
            </Link>
            <a href="#about" >
            <img className='logo' src={require('../resources/favicon_io_transparent/favicon.ico')} alt="CausingTheLost.logo"></img>
            </a>
        </nav>
    )
}

export default Nav;