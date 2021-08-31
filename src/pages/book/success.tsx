import React from "react";
import { navigate } from "gatsby-link";

import Layout from "../../components/templates/Layout";

const BookSuccessPage = () => {
  const handleBack = () => {
    navigate("/book");
  };
  return (
    <Layout>
      <div className="constainer max-w-5xl mx-auto">
        <header>
          <h2 className="text-4xl font-bold text-center text-blue-400">
            Appointment booked successfully!
          </h2>

          <button
            className="bg-blue-400 hover:bg-blue-500 rounded-md text-white font-bold mx-auto mt-8"
            type="button"
            onClick={handleBack}
          >
            Complete
          </button>
        </header>
      </div>
    </Layout>
  );
};

export default BookSuccessPage;
