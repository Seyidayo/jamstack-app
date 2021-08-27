import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

const Layout = ({ children }) => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>More sleep</title>
    </Helmet>
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default Layout;
