import "./Profiles.scss";

function Profiles() {
   return (
      <div className="ProfilesWrapper">
         Profil
         <nav className="ProfilesHiddenMenu">
            <div className="ProfilesHidden" onClick={() => setActualID(12)}>
               User 1
            </div>
            <div className="ProfilesHidden" onClick={() => setActualID(18)}>
               User 2
            </div>
         </nav>
      </div>
   );
}

export default Profiles;
