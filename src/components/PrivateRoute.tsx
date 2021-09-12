import React from "react";
import Layout from "../components/templates/Layout";
import { navigate } from "gatsby";
import UserContext from "../context/UserContext";
import { useContext } from "react";

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const { user } = useContext(UserContext);

  if (!user) {
    navigate(`/`);
    return null;
  }

  return (
    <Layout {...rest}>
      <Component />
    </Layout>
  );
};

export default PrivateRoute;
