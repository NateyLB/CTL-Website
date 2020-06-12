import React, { useEffect } from 'react'
import { Route } from 'react-router'

import Nav from "./Nav.js"


const AdminTools = props =>{
    useEffect(()=>{
        document.title="Admin Tools"
    },[])

    const clickBars = ()=>{
        document.getElementById("admin-nav").style.visibility="visible";
    }

    return(
        <div className="admin-tools">
            <Nav/>
            <i className="fas fa-bars" id="bars" onClick={clickBars}></i>
            <Route path="/admin/tools/prod">
                
            </Route>
        </div>
    )
}

export default AdminTools;