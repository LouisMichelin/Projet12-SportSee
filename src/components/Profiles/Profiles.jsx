import "./Profiles.scss";

function Profiles() {
   return (
      <nav className="ProfilesWrapper">
         <div>Profil</div>
         <div className="ProfilesHiddenMenu">
            <div className="ProfilesHidden">User1</div>
            <div className="ProfilesHidden">User2</div>
         </div>
      </nav>
   );
}

export default Profiles;
