import React, { useState, useEffect } from "react";
import "./Welcome.scss";
import { getMainData } from "../../services/APIservices";

function Welcome({ userId }) {
   getMainData(12);
   // let test = localStorage.getItem("userData");
   // JSON.parse(test);
   // console.log(test);

   const myTest123 = JSON.parse(localStorage.getItem("userData"));
   console.log(myTest123);
   // APIS.getMainData(12);
   // console.log(APIS.getMainData(12));
   // getMainData().then((data) => {
   //    console.log(data);
   // });
   // getMainData(12);
   // console.log(getMainData(12));
   // getMainData(12);
   // const test123 = getMainData(12).id;
   // console.log(USER_MAIN_DATA);
   return (
      <div className="WelcomeWrapper">
         <div className="WelcomeMessage">
            Bonjour&nbsp;
            <span id="WelcomeName" style={{ color: "#FF0101" }}>
               KEvin
            </span>
         </div>
         <div className="WelcomeMessageCongrats">
            Félicitation ! Vous avez explosé vos objectifs hier &#128079;
         </div>
      </div>
   );
}

export default Welcome;
