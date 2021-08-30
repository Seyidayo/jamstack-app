import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import UserProvider from "../../../context/UserContext";

interface LayoutInterface {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutInterface) => (
  <UserProvider>
    <Helmet>
      <meta charSet="utf-8" />
      <title>More sleep</title>
    </Helmet>
    <Navbar />
    {children}
    <Footer />
  </UserProvider>
);

export default Layout;
