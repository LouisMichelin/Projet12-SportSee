import "./Header.scss";
import Sportsee from "../../assets/logoSportsee.png";
import Profiles from "../Profiles/Profiles";

function Header() {
   return (
      <div className="HeaderWrapper">
         <img className="HeaderLogo" src={Sportsee} alt="Logo Sportsee" />
         <nav className="NavContainer">
            <a className="NavLink Accueil">Accueil</a>
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
