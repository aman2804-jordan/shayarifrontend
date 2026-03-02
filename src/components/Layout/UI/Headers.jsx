import { NavLink } from "react-router-dom";
import { GiFeather } from "react-icons/gi";
import { useState } from "react";

export const Headers = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="container">
        <div className="navbar-grid">

          <div className="Logo">
            <NavLink to="/">
              <h1><GiFeather /> AeJazbaaat</h1>
            </NavLink>
          </div>

          {/* Hamburger */}
          <div
            className="ham-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </div>

          <nav className={menuOpen ? "active" : ""}>
            <ul onClick={() => setMenuOpen(false)}>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/shayars">Shayars</NavLink></li>
              <li><NavLink to="/share">Share</NavLink></li>
              <li><NavLink to="/admin">Client</NavLink></li>
            </ul>
          </nav>

        </div>
      </div>
    </header>
  );
};