import "./Profiles.scss";
import { getMainData } from "../../services/APIservices";
import { useEffect, useState } from "react";

function Profiles() {
   const [actualId, setActualId] = useState(12);

   useEffect(() => {
      sessionStorage.setItem("actualId", actualId);
      sessionStorage.setItem("userMainData", getMainData(actualId));
      console.log("slt !!!", sessionStorage.actualId);
      // console.log("slt !!!", sessionStorage.getItem("userMainData"));

      console.log("useeffect Loaded");
   }, [actualId]);

   // ATTRIBUTION DE LA VALEUR DE L'ID POUR LES AUTRES DATAS
   // function toggleProfile(user_id) {
   //    sessionStorage.setItem("profileID", user_id);
   //    console.log(sessionStorage.profileID);
   //    sessionStorage.setItem("userMainData", getMainData(user_id));
   //    console.log(sessionStorage);
   // }

   return (
      <div className="ProfilesWrapper">
         Profil
         <nav className="ProfilesHiddenMenu">
            <div className="ProfilesHidden" onClick={() => setActualId(12)}>
               User1
            </div>
            <div className="ProfilesHidden" onClick={() => setActualId(18)}>
               User2
            </div>
         </nav>
      </div>
   );
}

export default Profiles;
