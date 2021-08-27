import React, { useContext, useState } from "react";
import Layout from "../components/templates/Layout";
import { TokenContext } from "../context/tokenContext";

import BgImage from '../assets/images/person-sleeping.jpg'

const IndexPage = () => {
  const [loading, setLoading] = useState(false);
  // const { } = useContext(TokenContext)

  const handleSignIn = (event: any): void => {
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
      <main className="max-w-5xl mx-auto">
        {/* {token} */}
        <div className="grid grid-cols-2 py-24 items-center">
          <header>
            <h1 className="text-6xl font-extrabold leading-tight text-gray-900">
              Keep up with <br />
              <span className="text-blue-400">
                &#8212; <em>sleep</em> easy.
              </span>
            </h1>

            <article className="col-start-3 w-96">
              <p className="my-8">
                You want more sleep, we know how to get it
                Book <strong className="text-blue-400">
                  24 hours
                </strong> of sleep and have a cozy place
                <strong>&#8212; prepared for you</strong> easy, anytime.
              </p>
              <div className="flex gap-4 items-center">
                <button
                  className="bg-blue-400 hover:bg-blue-500 rounded-md text-white font-bold"
                  type="button"
                  onClick={handleSignIn}
                >
                  {loading ? `Loading` : `Book a space`}
                </button>
              </div>
            </article>
          </header>
          <picture> <img src={BgImage} width="100%" alt="" /> </picture>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;
