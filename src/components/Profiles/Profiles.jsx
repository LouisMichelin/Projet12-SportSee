import "./Profiles.scss";
import { useState } from "react";

function Profiles() {
   const [GLOBAL_USER_ID_VALUE, setGLOBAL_USER_ID_VALUE] = useState(undefined);

   // ATTRIBUTION DE LA VALEUR DE L'ID POUR LES AUTRES DATAS
   function toggleProfile(userID) {
      setGLOBAL_USER_ID_VALUE(userID);
      console.log(userID);
   }

   return (
      <div className="ProfilesWrapper">
         Profil
         <nav className="ProfilesHiddenMenu">
            <div className="ProfilesHidden" onClick={() => toggleProfile(12)}>
               User1
            </div>
            <div className="ProfilesHidden" onClick={() => toggleProfile(18)}>
               User2
            </div>
         </nav>
      </div>
   );
}

export default Profiles;
