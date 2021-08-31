import { navigate } from "gatsby";
import React from "react";
import { InlineWidget, CalendlyEventListener } from "react-calendly";

import Layout from "../../components/templates/Layout";
const BookAppointmentPage = () => {
  const handleChange = (e: any) => {
    const {
      data: { event },
    } = e;
    if (event === "calendly.event_scheduled") {
      navigate("/book/success");
    }
  };

  return (
    <Layout>
      <section className="container max-w-5xl bg-blue:400 mx-auto">
        <CalendlyEventListener onEventScheduled={handleChange}>
          <InlineWidget url="https://calendly.com/faithid10" />
        </CalendlyEventListener>
      </section>
    </Layout>
  );
};

export default BookAppointmentPage;
