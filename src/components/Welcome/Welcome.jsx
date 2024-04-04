import "./Welcome.scss";
import { getMainData } from "../../services/APIservices";
import MyJSON from "../../data/dashboard-master/app/data/data.json";
import { useEffect, useState } from "react";
// console.log(MyJSON);
// console.log("------------------------");
// console.log(MyJSON[0].USER_MAIN_DATA);
// console.log(MyJSON[1].USER_ACTIVITY);
// console.log(MyJSON[2].USER_AVERAGE_SESSIONS);
// console.log(MyJSON[3].USER_PERFORMANCE);
// console.log("------------------------");

function Welcome() {
   // const [actualId, setActualId] = useState(12);
   // console.log("actual ID useState === ", actualId);

   // Si sessionStorage est vide, alors on appelle la fonction API avec l'ID de Cecilia;
   // if (sessionStorage.getItem("userMainData") == null) {
   let actualId = sessionStorage.getItem("actualId");
   sessionStorage.setItem("userMainData", getMainData(actualId));
   // }
   console.log("sessionStorage = ", sessionStorage);

   // Après usage de la fonction API, on informe que "dataAPI" a été utilisé (donc TRUE);
   if (sessionStorage.getItem("dataAPI") == null) {
      sessionStorage.setItem("dataAPI", true);
   }

   // useEffect(() => {
   //    if (!actualId) {
   //       sessionStorage.setItem("userMainData", getMainData(actualId));
   //       console.log("slt !!!", sessionStorage.profileID);
   //       console.log("slt !!!", sessionStorage.getItem("userMainData"));
   //    }
   //    console.log("useeffect Loaded");
   // }, [actualId]);

   const mainData = JSON.parse(sessionStorage.getItem("userMainData")); // Import des DATA depuis sessionStorage;
   const firstName = mainData.data.userInfos.firstName; // Puis définition de "firstName";

   return (
      <div className="WelcomeWrapper">
         <div className="WelcomeMessage">
            Bonjour&nbsp;
            <span id="WelcomeName" style={{ color: "#FF0101" }}>
               {firstName}
            </span>
         </div>
         <div className="WelcomeMessageCongrats">
            Félicitation ! Vous avez explosé vos objectifs hier &#128079;
         </div>
      </div>
   );
}

export default Welcome;
