import React, { useEffect, useState } from "react";
import { Link, navigate } from "gatsby";

const Navbar = () => {
  const [token, setToken] = useState("");

  const handleLogout = async (event) => {
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

  useEffect(() => {
    if (window.localStorage['google:tokens']) {
      const token = JSON.parse(window.localStorage["google:tokens"]);
      setToken(token);
    }
  }, []);

  return (
    <nav className="w-100 position-fixed py-5">
      <div className="container mx-auto">
        <ul className="grid grid-cols-3 gap-4">
          <li className="col-start-2 self-center text-center">
            <Link to="/" className="font-bold uppercase">More sleep</Link>
          </li>
          <li>
            {!!token && (
              <button type="button" onClick={handleLogout}>
                Logout
              </button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
