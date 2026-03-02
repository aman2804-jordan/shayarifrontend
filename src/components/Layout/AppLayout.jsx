import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const AppLayout = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check token on load
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/admin");
  };

  return (
    <>
      <header>
        <nav className="navbar container">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/shayars">Shayars</NavLink>
          <NavLink to="/share">Share</NavLink>

          {!isLoggedIn ? (
            <NavLink to="/admin">Admin</NavLink>
          ) : (
            <>
              <NavLink to="/adminpage">Dashboard</NavLink>
              <button
                onClick={handleLogout}
                style={{
                  marginLeft: "15px",
                  background: "black",
                  color: "gold",
                  border: "1px solid gold",
                  padding: "5px 10px",
                  cursor: "pointer"
                }}
              >
                Logout
              </button>
            </>
          )}
        </nav>
      </header>

      <Outlet />
    </>
  );
};