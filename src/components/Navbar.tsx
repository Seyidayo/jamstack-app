import React, { useState } from "react";
import { Link, navigate } from "gatsby";

const Navbar = () => {
  const [token] = useState("");

  const handleSignOut = async (event: any) => {
    event.preventDefault();
    try {
      await fetch(`/api/logout?token=${token}`, {
        method: "POST",
      }).catch((err) => {
        console.error(`Logout error: ${err}`);
      });
    } finally {
      window.localStorage.removeItem("google:tokens");
      navigate("/");
    }
  };

  const showBackButton = (): boolean => {
    const url = typeof window !== "undefined" ? window.location.pathname : "";
    return url.split("/").length > 2;
  };

  return (
    <nav className="w-100 position-fixed py-5 mb-8 tablet:mb-16 laptop:mb-24">
      <div className="container max-w-5xl mx-auto">
        <ul className="grid grid-cols-3 gap-4">
          {showBackButton() && (
            <li className="col-start-1 text-blue-400 hover:text-blue-300 font-bold">
              <Link to="/book">&#8249; Back</Link>
            </li>
          )}
          <li className="col-start-2 self-center text-center">
            <Link to="/" className="font-bold uppercase">
              More sleep
            </Link>
          </li>
          <li>
            {!!token && (
              <button
                className="bg-blue-400 hover:bg-blue-500 rounded-md text-white font-bold ml-auto"
                type="button"
                onClick={handleSignOut}
              >
                Log out
              </button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
