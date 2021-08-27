import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/templates/Layout";


const IndexPage = () => {
  const [loading, setLoading] = useState(false);
  const handleSignIn = (event): void => {
    event.preventDefault();
    try {
      setLoading(true);
      window.location.assign("/api/login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <main className="container mx-auto">
        <header className="py-24">
          <h1 className="text-6xl font-bold">
            Keep up with <br /><span className="text-blue-400">&#8212; <em>sleep</em> <br /> easy.</span>
          </h1>
        </header>
        <section className="grid grid-cols-3 gap-4">
          <article className="col-start-3">
            <p className="my-4">
              Book more hours of sleep and have a bed <br />
              <strong>&#8212; shipped to you</strong> easy, anywhere, anyday,
              anytime.
            </p>
            <div className="flex gap-4 items-center">
              <button className="bg-blue-400 hover:bg-blue-500 rounded-md text-white" type="button" onClick={handleSignIn}>
                {loading ? `Loading` : `Get started`}
              </button>
              <em>Now, it's cheap</em>
            </div>
          </article>
        </section>
      </main>
    </Layout >
  );
};

export default IndexPage;
