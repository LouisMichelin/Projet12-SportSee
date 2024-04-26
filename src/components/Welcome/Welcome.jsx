import "./Welcome.scss";
import { getMainData } from "../../services/APIservices";
import { useEffect, useState } from "react";

function Welcome({ useParamID }) {
   const [userDataFetched, setUserDataFetched] = useState(null);
   const [canRunFunction, setCanRunFunction] = useState(true);

   useEffect(() => {
      // Function Async fetchData() récupère les données :
      async function fetchData() {
         const reponse = await getMainData(useParamID);
         setUserDataFetched(reponse.userInfos.firstName);
      }
      // Break Infinite Loop :
      if (canRunFunction) {
         setCanRunFunction(!canRunFunction);
         fetchData();
      }
   }),
      [useParamID];

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
