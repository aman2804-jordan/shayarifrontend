import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const AppLayout = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));

  // 👇 This ensures UI updates after login
  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
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

          {/* 👇 Keep your previous style, just conditionally render */}
          {!token ? (
            <NavLink to="/admin">Admin</NavLink>
          ) : (
            <>
              <NavLink to="/adminpage">Admin Panel</NavLink>
              <button onClick={handleLogout}>Logout</button>
            </>
          )}
        </nav>
      </header>

      <Outlet />
    </>
  );
};