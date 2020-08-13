import React from "react";
import { Route } from "react-router";
import "./App.css";

import Nav from "./components/Nav";
import Cart from "./components/Shop/Cart/Cart";
import About from "./components/Home/About";
import Gallery from "./components/Home/Gallery";
import Contact from "./components/Home/Contact";
import Shop from "./components/Shop/Shop";
import Checkout from "./components/Checkout/Checkout";
import AdminLogin from "./components/Admin/AdminLogin";
import PrivateAdminRoute from "./components/Admin/PrivateAdminRoute";
import AdminTools from "./components/Admin/AdminTools";

/**
 * @desc main app, contains all routes
 */
function App() {
  window.onclick = function (event) {
    let modal = document.getElementById("modal") as HTMLElement;
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  return (
    <div>
      <header>
        <Nav />
      </header>
      <div id="modal" className="modal">
        <Cart checkout={true} />
      </div>
      <Route exact path={["/", "/home"]}>
        <About />
        <Gallery />
        <Contact />
      </Route>
      <Route path="/shop">
        <Shop />
      </Route>
      <Route path="/checkout">
        <Checkout />
      </Route>
      <Route exact path="/admin">
        <AdminLogin />
      </Route>
      <PrivateAdminRoute path={"/admin/tools"} component={AdminTools} />
    </div>
  );
}
export default App;
