import React, { useEffect, useState } from "react";
import { Link, navigate } from "gatsby";

const Navbar = () => {
  const [token, setToken] = useState("");

  const handleSignOut = async (event: any) => {
    event.preventDefault();
    try {
      await fetch(
        `/api/logout?token=${token}`,
        {
          method: "POST",
        }
      )
        .catch((err) => {
          console.error(`Logout error: ${err}`);
        });
    }
    finally {
      window.localStorage.removeItem("google:tokens");
      navigate("/");
    }
  };


  return (
    <nav className="w-100 position-fixed py-5">
      <div className="max-w-5xl mx-auto">
        <ul className="grid grid-cols-3 gap-4">
          <li className="col-start-2 self-center text-center">
            <Link to="/" className="font-bold uppercase">More sleep</Link>
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
