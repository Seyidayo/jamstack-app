import React, { useContext, useState } from "react";
import { Link, navigate } from "gatsby";
import UserContext from "../context/UserContext";

type NavbarProps = {
  showBackButton?: boolean;
};

const Navbar = ({ showBackButton }: NavbarProps) => {
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const handleSignOut = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    try {
      await fetch(`/api/logout?token=${user}`, {
        method: "POST",
      }).catch((err) => {
        console.error(`Logout error: ${err}`);
      });
    } finally {
      setLoading(false);
      setUser("");
      navigate("/");
    }
  };

  return (
    <nav className="w-100 position-fixed py-5 mb-8 tablet:mb-16 laptop:mb-24">
      <div className="container max-w-5xl mx-auto">
        <ul className="grid grid-cols-3 gap-4">
          {showBackButton && (
            <li className="col-start-1 text-blue-400 hover:text-blue-300 font-bold">
              <Link to="/book">&#8249; Back</Link>
            </li>
          )}
          <li className="col-start-2 self-center text-center">
            <Link to="/" className="font-extrabold text-sm uppercase">
              More sleep
            </Link>
          </li>
          <li>
            {!!user && (
              <button
                className="bg-blue-400 hover:bg-blue-500 rounded-md text-white font-bold ml-auto"
                type="button"
                onClick={handleSignOut}
              >
                {loading ? "Logging out" : "Log out"}
              </button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
