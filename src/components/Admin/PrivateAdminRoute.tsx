import React from "react";
import { Route, Redirect } from "react-router";
// Requirements:
// 1. It has the same API as <Route />.
// 2. It renders a <Route /> and passes all the props through to it.
// 3. It checks if the user is authenticated, if they are, it renders
// the “component” prop. If not, it redirects the user to /login.
/**
 * 
 * @param component which component to render
 * @param rest the rest of the params when PrivateRoute is called, path={} 
 */
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("adminToken")) {
          return <Component {...props} />; // render component passed into props
        } else {
          return <Redirect to="/admin" />;
        }
      }}
    />
  );
};
export default PrivateRoute;
