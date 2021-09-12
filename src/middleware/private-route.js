import React, { useContext } from "react";
import { navigate } from "gatsby";
import UserContext from "../context/UserContext";

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const { user } = useContext(UserContext);
  if (!user) {
    navigate("/");
    return null;
  }
  return <Component {...rest} />;
};
export default PrivateRoute;
