import React, { useContext, useEffect } from "react";
import { navigate } from "gatsby";
import { Helmet } from "react-helmet";
import qs from "query-string";

import { UserContext } from "../context/UserContext";
import Layout from "../components/templates/Layout";

const LoginPage = ({ location }: any) => {
  const { token } = qs.parse(location?.search);
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    setUser(token);
    setTimeout(() => {
      navigate("/book/");
    }, 1000);
  });

  return (
    <Layout>
      <Helmet>
        <title>Authenticating...</title>
      </Helmet>

      <div className="container max-w-5xl mx-auto">
        <header>
          <h2 className="text-4xl font-bold text-center text-blue-400">
            Authenticating your account...
          </h2>
        </header>
      </div>
    </Layout>
  );
};

export default LoginPage;
