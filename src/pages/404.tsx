import * as React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from '../components/templates/Layout'

const NotFoundPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Not found</title>
      </Helmet>
      <main className="container mx-auto flex flex-col items-center py-24">
        <h1 className="font-bold text-4xl mb-4">Page not found</h1>
        <Link to="/">
          <button className="bg-blue-400 hover:bg-blue-500 text-white font-weight-bold rounded-md">Home</button>
        </Link>
      </main>
    </Layout>
  );
};

export default NotFoundPage;
