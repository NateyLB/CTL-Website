import React from "react";
import { Link } from "react-router-dom"

const Nav = props =>{

    return(
        
        <nav className="nav">
            <Link to="/">
                Home
            </Link>
            <Link to="/gallery">
                Gallery
            </Link>
            <Link to="/contact">
                Contact
            </Link>
            <Link to="/">
            <img className='logo' src={require('../resources/favicon_io_transparent/favicon.ico')} alt="CausingTheLost.logo"></img>
            </Link>
        </nav>
    )
}

export default Nav;