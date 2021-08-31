import React, { useState } from "react";
import Layout from "../components/templates/Layout";

import BgImage from "../assets/images/person-sleeping.jpg";

const IndexPage = () => {
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      window.location.assign("/api/login");
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <main className="max-w-5xl container mx-auto">
        <div className="block tablet:grid tablet:grid-cols-2  items-center">
          <header>
            <h1 className="text-6xl font-extrabold leading-tight text-gray-900">
              Keep up with <br />
              <span className="text-blue-400">
                &#8212; <em>sleep</em> easy.
              </span>
            </h1>
            <article className="col-start-3 w-96">
              <p className="my-8">
                You want more sleep, we know how to get it Book{" "}
                <strong className="text-blue-400">up to 12 hours</strong> of
                sleep and have a cozy place
                <strong>&#8212; prepared for you</strong> easy, anytime.
              </p>
              <div className="flex gap-4 items-center">
                <button
                  className="bg-blue-400 hover:bg-blue-500 rounded-md text-white font-bold"
                  type="button"
                  onClick={handleSignIn}
                  disabled={loading}
                >
                  {loading ? `Loading` : `Book a space`}
                </button>
              </div>
            </article>
          </header>
          <picture>
            {" "}
            <img
              className="mt-4 tablet:mt-0"
              src={BgImage}
              width="100%"
              alt=""
            />{" "}
          </picture>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;
