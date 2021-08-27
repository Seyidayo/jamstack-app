import React, { useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import qs from "query-string";
import Layout from "../components/templates/Layout";
import { TokenContext } from "../context/tokenContext";

const LoginPage = ({ location }: any) => {
  const query = qs.parse(location?.search);
  // const { token, setToken } = useContext(TokenContext)
  // const { access_token } = JSON.parse(query.token)



  useEffect(() => {
    setToken(access_token)
    setTimeout(() => {
      window.location.assign("/book/");
    }, 1000);
  });

  return (
    <Layout>
      <Helmet>
        <title>Authenticating...</title>
      </Helmet>

      <div className="max-w-5xl mx-auto">
        <header className="pt-24">
          <h2 className="text-4xl font-bold text-center text-blue-400">Authenticating your account...</h2>
        </header>
      </div>
    </Layout>
  );
};

export default LoginPage;
