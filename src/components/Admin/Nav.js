import React from 'react'
import { Link } from "react-router-dom"

const Nav = props =>{

    return(
        <nav id="admin-nav">
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