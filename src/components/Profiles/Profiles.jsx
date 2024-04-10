import "./Profiles.scss";

function Profiles() {
   return (
      <div className="ProfilesWrapper">
         Profil
         <nav className="ProfilesHiddenMenu">
            <a href="/12" className="ProfilesHidden">
               Karl
            </a>
            <a href="/18" className="ProfilesHidden">
               Cécilia
            </a>
         </nav>
      </div>
   );
}

export default Profiles;
