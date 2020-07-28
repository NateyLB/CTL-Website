import  React, { useEffect } from 'react';
import { Route } from 'react-router'
import './App.css';

import Nav from './components/Nav';
import About from './components/Home/About';
import Gallery from './components/Home/Gallery';
import Contact from './components/Home/Contact';
import Shop from './components/Shop/Shop';
import AdminLogin from './components/Admin/AdminLogin'
import PrivateAdminRoute from './components/Admin/PrivateAdminRoute';
import AdminTools from './components/Admin/AdminTools';

/**
 * @desc main app, contains all routes
 */
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
      <Route path="/shop">
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