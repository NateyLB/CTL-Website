import React, { useEffect } from 'react';
import { Route, useHistory } from 'react-router';
import   jwt_decode   from 'jwt-decode';


import Nav from "./Nav.js";
import Products from "./Products.js";



const AdminTools = props =>{
    const match = useHistory();
    useEffect(()=>{
        document.title="Admin Tools"
        const token = localStorage.getItem('adminToken')
        if(token){
            const decoded = jwt_decode(token)
            //check if token is expired
            if(Date.now() >= decoded.exp*1000){
                localStorage.removeItem('adminToken')
                match.push('/admin')
            }
        }
    },[])

    const clickBars = ()=>{
        document.getElementById("admin-nav").style.visibility="visible";
        document.getElementById("bars").style.visibility="hidden"
        document.getElementById("x").style.visibility="visible"
        let marginPercent = 0;
        if(window.screen.width >= 1200){
            marginPercent = 0
        }else{
            marginPercent = 21
        }
        document.getElementById("admin-content").style.marginLeft=`${marginPercent}%`
    }

    const clickX = ()=>{
        document.getElementById("admin-nav").style.visibility="hidden";
        document.getElementById("x").style.visibility="hidden";
        document.getElementById("bars").style.visibility="visible";
        document.getElementById("admin-content").style.marginLeft="0"

    }

    return(
        <div className="admin-tools">
            <Nav/>
            <i className="fas fa-bars" id="bars" onClick={clickBars}></i>
            <i className="fas fa-times" id="x" onClick={clickX}></i>
            <div id="admin-content">
            <Route path="/admin/tools/products">
                <Products/>
            </Route>
            </div>
        </div>
    )
}

export default AdminTools;