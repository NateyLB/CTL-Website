import React from "react";
import { Link } from "react-router-dom"
import { useHistory } from 'react-router'

/**
 * @desc main nav bar for the site
 * @param props not used
 */
const Nav = props =>{
    const match = useHistory();
    
    /**
     * @desc go to /home
     * @return boolean
     */
    const pushHome =()=>{
        match.push('/home')
        return true
    }

    return(
        
        <nav className="nav">
            <a href="#about" onClick={pushHome}>
                Home
            </a>
            <a href="#gallery" onClick={pushHome}>
                Gallery
            </a>
            <a href="#contact" onClick={pushHome}>
                Contact
            </a>
            <Link to="/shop">
                Shop
            </Link>
            <a href="#about" onClick={pushHome} >
            <img className='logo' src={require('../resources/favicon_io_transparent/favicon.ico')} alt="CausingTheLost.logo"></img>
            </a>
        </nav>
    )
}

export default Nav;