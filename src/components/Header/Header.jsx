import "./Header.scss";
// import { Link } from "react-router-dom";
import Sportsee from "../../assets/logoSportsee.png";

function Header() {
   return (
      <div className="HeaderWrapper">
         <img className="HeaderLogo" src={Sportsee} alt="Logo Sportsee" />
         <nav className="NavContainer">
            <div className="NavLink">Accueil</div>
            <div className="NavLink">Profil</div>
            <div className="NavLink">Réglage</div>
            <div className="NavLink">Communauté</div>
         </nav>
      </div>
   );
}

export default Header;
