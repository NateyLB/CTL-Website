import React from 'react'
import { Link } from "react-router-dom"

const Nav = props =>{

    const clickX = ()=>{
        document.getElementById('admin-nav').style.visibility="hidden";
    }

    return(
        <nav id="admin-nav">
        <i className="fas fa-times" onClick={clickX}></i>
        <Link to="/admin/tools/products">
            Product Management
        </Link>
        <Link to="/admin/tools/orders">
            Orders
        </Link>
        <Link to="/admin/tools/users">
            Users
        </Link>

        </nav>
    )
}

export default Nav;