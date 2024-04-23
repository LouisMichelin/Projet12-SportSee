import "./Welcome.scss";
import { getMainData } from "../../services/APIservices";
import { useEffect, useState } from "react";

function Welcome({ useParamID }) {
   const [userDataFetched, setUserDataFetched] = useState(null);

   useEffect(() => {
      (async () => {
         const userData = await getMainData(useParamID);
         // console.log("WELCOME", userData);
         setUserDataFetched(userData.userInfos.firstName);
      })();
   }),
      [];

   return (
      <div className="WelcomeWrapper">
         <div className="WelcomeMessage">
            Bonjour&nbsp;
            <span id="WelcomeName">{userDataFetched}</span>
         </div>
         <div className="WelcomeMessageCongrats">
            Félicitation ! Vous avez explosé vos objectifs hier &#128079;
         </div>
      </div>
   );
}

export default Welcome;
