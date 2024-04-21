import "./Welcome.scss";
import { getMainData } from "../../services/APIservices";

function Welcome({ useParamID }) {
   const userData = getMainData(useParamID);
   console.log("WELCOME: ", userData);

   // const userData = await getMainData(useParamID);
   // let welcomeTest = userData;

   return (
      <div className="WelcomeWrapper">
         <div className="WelcomeMessage">
            Bonjour&nbsp;
            {/* <span id="WelcomeName">{welcomeTest}</span> */}
         </div>
         <div className="WelcomeMessageCongrats">
            Félicitation ! Vous avez explosé vos objectifs hier &#128079;
         </div>
      </div>
   );
}

export default Welcome;
