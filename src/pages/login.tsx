import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import qs from "query-string";
import Layout from "../components/templates/Layout";

const LoginPage = ({ location }) => {
  const query = qs.parse(location?.search);

  useEffect(() => {
    // if (typeof window !== `undefined`) {
    //   window.localStorage.setItem(`google:tokens`, JSON.stringify(query.token));
    // }

    // setTimeout(() => {
    //   window.location.assign("/app/");
    // }, 1000);
  });

  return (
    <Layout>
      <Helmet>
        <title>Authenticating...</title>
      </Helmet>

      <div className="container mx-auto">
        <header className="pt-24">
          <h2 className="text-4xl font-bold text-center text-blue-400">Authenticating your account...</h2>
        </header>
      </div>
    </Layout>
  );
};

export default LoginPage;
