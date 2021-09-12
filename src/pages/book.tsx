import React from "react";
import { Router } from "@reach/router";
import PrivateRoute from "../components/PrivateRoute";
import ProductPage from "../components/Product";
import ProductListPage from "../components/Products";

const Book = () => (
  <Router>
    <PrivateRoute path="/book" component={ProductListPage} />
    <PrivateRoute path="/book/:slug" component={ProductPage} />
  </Router>
);

export default Book;
