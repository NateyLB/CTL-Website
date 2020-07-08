import React, { useEffect } from 'react';
import { Route, useHistory } from 'react-router';
import   jwt_decode   from 'jwt-decode';


import Nav from "./Nav";
import Products from "./Products";



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
        const adminNav = document.getElementById("admin-nav") as HTMLElement
        adminNav.style.visibility="visible";
        const bars = document.getElementById("bars") as HTMLElement
        bars.style.visibility="hidden"
        const x = document.getElementById("x") as HTMLElement
        x.style.visibility="visible"
        let marginPercent = 0;
        if(window.screen.width >= 1200){
            marginPercent = 0
        }else{
            marginPercent = 21
        }
        const adminContent = document.getElementById("admin-content") as HTMLDivElement
        adminContent.style.marginLeft=`${marginPercent}%`
    }

    const clickX = ()=>{
        const adminNav = document.getElementById("admin-nav") as HTMLElement
        adminNav.style.visibility="hidden";
        const x = document.getElementById("x") as HTMLElement
        x.style.visibility="hidden";
        const bars = document.getElementById("bars") as HTMLElement
        bars.style.visibility="visible";
        const adminContent = document.getElementById("admin-content") as HTMLDivElement
        adminContent.style.marginLeft="0"

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