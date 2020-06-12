import React, { useEffect } from 'react'
import { Route } from 'react-router'

import Nav from "./Nav.js"


const AdminTools = props =>{
    useEffect(()=>{
        document.title="Admin Tools"
    },[])

    const clickBars = ()=>{
        document.getElementById("admin-nav").style.visibility="visible";
        document.getElementById("bars").style.visibility="hidden"
        document.getElementById("x").style.visibility="visible"
    }

    const clickX = ()=>{
        document.getElementById("admin-nav").style.visibility="hidden";
        document.getElementById("x").style.visibility="hidden";
        document.getElementById("bars").style.visibility="visible";
    }

    return(
        <div className="admin-tools">
            <Nav/>
            <i className="fas fa-bars" id="bars" onClick={clickBars}></i>
            <i className="fas fa-times" id="x" onClick={clickX}></i>
            <Route path="/admin/tools/prod">
                
            </Route>
        </div>
    )
}

export default AdminTools;