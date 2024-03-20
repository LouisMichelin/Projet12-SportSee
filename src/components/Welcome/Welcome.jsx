import "./Welcome.scss";
import React, { useState, useEffect } from "react";
import { getMainData } from "../../services/APIservices";

let userId = 12;

function Welcome() {
   // Si la sessionStorage est null alors on appelle la fonction API getMainData()
   if (sessionStorage.getItem("mainData") == null) {
      getMainData(userId);
   }
   const mainData = JSON.parse(sessionStorage.getItem("mainData"));
   if (mainData.data.id != userId) {
      getMainData(userId);
   }
   // Utilisation des Data "fetched"
   const firstName = mainData.data.userInfos.firstName;

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
