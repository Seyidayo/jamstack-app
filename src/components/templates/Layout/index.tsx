import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import UserProvider from "../../../context/UserContext";

interface LayoutInterface {
  children: React.ReactNode;
  // TODO: Use context approach
  showBackButton?: boolean;
}

const Layout = ({ children, showBackButton }: LayoutInterface) => (
  <UserProvider>
    <Helmet>
      <meta charSet="utf-8" />
      <title>More sleep</title>
    </Helmet>
    <Navbar showBackButton={showBackButton} />
    {children}
    <Footer />
  </UserProvider>
);

export default Layout;
