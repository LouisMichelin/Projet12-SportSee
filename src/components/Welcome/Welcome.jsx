import "./Welcome.scss";
import { getMainData } from "../../services/APIservices";

function Welcome({ useParamID }) {
   const userData = getMainData(useParamID).userInfos.firstName;

   return (
      <div className="WelcomeWrapper">
         <div className="WelcomeMessage">
            Bonjour&nbsp;
            <span id="WelcomeName">{userData}</span>
         </div>
         <div className="WelcomeMessageCongrats">
            Félicitation ! Vous avez explosé vos objectifs hier &#128079;
         </div>
      </div>
   );
}

export default Welcome;
