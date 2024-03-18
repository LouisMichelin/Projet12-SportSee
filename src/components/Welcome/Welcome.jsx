import React, { useState, useEffect } from "react";
import "./Welcome.scss";
import { getMainData } from "../../services/APIservices";

let userId = 12;

function Welcome() {
   getMainData(userId); // Fonction FETCH() pour données de USER_MAIN_DATA
   const mainData = JSON.parse(localStorage.getItem("mainData")); // Récupération des DATA LOCALES
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
