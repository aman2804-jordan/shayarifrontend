import { NavLink } from "react-router-dom";
import { GiFeather } from "react-icons/gi";

export const Headers = () => {
    return (
         <header>
            <div className="container">
                <div className="grid navbar-grid">
                    <div className="Logo">
                        <NavLink to="/">
                        <h1><GiFeather/>AeJazbaaat</h1>
                        </NavLink>
                    </div>
                    <nav>
                        <ul>
                            <li>
                            <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                            <NavLink to="/about">About</NavLink>
                            </li>
                            <li>
                            <NavLink to="/shayars">Shayars</NavLink>
                            </li>
                            <li>
                            <NavLink to="share">Share</NavLink>
                            </li>
                             <li>
                            <NavLink to="admin">Client</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
         </header>
    );
};