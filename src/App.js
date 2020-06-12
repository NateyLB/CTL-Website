import  React, { useEffect } from 'react';
import { Route } from 'react-router'
import './App.css';

import Nav from './components/Nav.js';
import About from './components/Home/About.js';
import Gallery from './components/Home/Gallery.js';
import Contact from './components/Home/Contact.js';
import Shop from './components/Shop/Shop.js';
import AdminLogin from './components/Admin/AdminLogin.js'
import PrivateAdminRoute from './components/Admin/PrivateAdminRoute.js';
import AdminTools from './components/Admin/AdminTools.js';

function App() {

  return (
    <div >
      <header >
       <Nav/>
      </header>
      <Route exact path={["/", "/home"]} >
        <About/>
        <Gallery/>
        <Contact/>
      </Route>
      <Route exact path="/shop">
        <Shop/>
      </Route>
      <Route exact path="/admin">
        <AdminLogin/>
      </Route>
      <PrivateAdminRoute path={"/admin/tools"} component={AdminTools}/>
    </div>
  );
}

export default App;
