import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

interface LayoutInterface {
  children: React.ReactNode;
  // TODO: Use context approach
  showBackButton?: boolean;
}

const Layout = ({ children, showBackButton }: LayoutInterface) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>More sleep</title>
    </Helmet>
    <Navbar showBackButton={showBackButton} />
    {children}
    <Footer />
  </>
);

export default Layout;
