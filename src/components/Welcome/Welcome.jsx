import "./Welcome.scss";
import { getMainData } from "../../services/APIservices";
import { useEffect, useState } from "react";

function Welcome({ useParamID }) {
   const [userDataFetched, setUserDataFetched] = useState("null");

   const userData = getMainData(useParamID);

   console.log(typeof userData === "object");

   // useEffect(() => {
   //    if (getMainData.constructor.name === "AsyncFunction") {
   //       console.log("function async");
   //       // setUserDataFetched(userData.userInfos.firstName);
   //       userData.then((data) => {
   //          console.log("effect data: ", data);
   //          return setUserDataFetched(data.userInfos.firstName);
   //       });
   //    } else {
   //       console.log("fonction mocked");
   //       setUserDataFetched(userData.userInfos.firstName);
   //    }

   //    // console.log(userData);
   //    ////////////////////////////////////////////////////////////
   //    // TOUT CET ENSEMBLE MARCHE INDEPENDAMENT : getMainDATA.THEN
   //    // FONCTIONNE === SetUSER POUR MOCKED NE MARCHE PAS
   //    // ET RECIPROQUEMENT.....
   //    ////////////////////////////////////////////////////////////
   //    // userData
   //    //    ? userData.then((data) => {
   //    //         console.log("effect data: ", data);
   //    //         setUserDataFetched(data.userInfos.firstName);
   //    //      })
   //    //    : setUserDataFetched(userData.userInfos.firstName);
   //    ////////////////////////////////////////////////////////////
   // }, []);

   return (
      <div className="WelcomeWrapper">
         <div className="WelcomeMessage">
            Bonjour&nbsp;
            <span id="WelcomeName">{userDataFetched}</span>
            {/* <span id="WelcomeName">{userDataFetched}</span> */}
         </div>
         <div className="WelcomeMessageCongrats">
            Félicitation ! Vous avez explosé vos objectifs hier &#128079;
         </div>
      </div>
   );
}

export default Welcome;
