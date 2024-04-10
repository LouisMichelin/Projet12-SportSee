import "./Header.scss";
// import { Link } from "react-router-dom";
import Sportsee from "../../assets/logoSportsee.png";
import Profiles from "../Profiles/Profiles";

function Header() {
   return (
      <div className="HeaderWrapper">
         <img className="HeaderLogo" src={Sportsee} alt="Logo Sportsee" />
         <nav className="NavContainer">
            <a className="NavLink" style={{ textDecoration: "none" }} href="/">
               Accueil
            </a>
            <div className="NavLink">
               <Profiles />
            </div>
            <div className="NavLink">Réglage</div>
            <div className="NavLink">Communauté</div>
         </nav>
      </div>
   );
}

export default Header;
