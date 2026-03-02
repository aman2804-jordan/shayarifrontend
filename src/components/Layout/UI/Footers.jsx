import footerContact from "../../.././collection/footerApi.json";
import { FaLocationDot } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { NavLink } from "react-router-dom";

export const Footers = () => {

    const footerIcon = {
        FaLocationDot: <FaLocationDot />,
        FaSquareInstagram: <FaSquareInstagram />,
        BiLogoGmail: <BiLogoGmail />
    }

    return <footer className="footer-section">
       <div className="container grid grid-three-cols">
         {
           footerContact.map((curData, index) => {
              const {icon, title, details } = curData;
              return (
                <div className="footer-contact" key={index}>
                    <div className="icon">{footerIcon[icon]}</div>
                    <div className="footer-contact-text">
                        <p>{title}</p>
                        <p>{details}</p>
                    </div>
                    </div>
              );
           })}
       </div>
       <div className="copyright-area">
        <div className="container">
            <div className="grid grid-two-cols">
                <div className="copyright-text">
                    <p>
                        copyright & copy; 2025, All Right Reserved
                    </p>
                </div>

             <div className="footer-menu">
                <ul>
                    <li> <NavLink to="/">Home</NavLink>
                    </li>

                    <li> <NavLink to="https://www.instagram.com/kalam_ae_jazbaaat/"
                    target="_blank"> Social Platform </NavLink> 
                    </li>

                    <li> <NavLink to="/share"> Share </NavLink> 
                    </li>
                </ul>
             </div>
            </div>
        </div>
       </div>
    </footer>
};