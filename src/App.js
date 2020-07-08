import  React, { useEffect } from 'react';
import { Route } from 'react-router'
import './App.css';

import Nav from './components/Nav.tsx';
import About from './components/Home/About.tsx';
import Gallery from './components/Home/Gallery.tsx';
import Contact from './components/Home/Contact.tsx';
import Shop from './components/Shop/Shop.tsx';
import AdminLogin from './components/Admin/AdminLogin.tsx'
import PrivateAdminRoute from './components/Admin/PrivateAdminRoute.tsx';
import AdminTools from './components/Admin/AdminTools.tsx';

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
