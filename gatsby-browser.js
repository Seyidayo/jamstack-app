import React from "react";
import "./src/styles/scss/index.scss";

import { UserProvider } from "./src/context/UserContext";
export const wrapRootElement = ({ element }) => (
  <UserProvider>{element}</UserProvider>
);
