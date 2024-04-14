import "./Welcome.scss";
import { getMainData } from "../../services/APIservices";

function Welcome({ useParamID }) {
   const userData = getMainData(useParamID).userInfos.firstName; // ID depuis userParams()

   return (
      <div className="WelcomeWrapper">
         <div className="WelcomeMessage">
            Bonjour&nbsp;
            <span id="WelcomeName" style={{ color: "#FF0101" }}>
               {userData}
            </span>
         </div>
         <div className="WelcomeMessageCongrats">
            Félicitation ! Vous avez explosé vos objectifs hier &#128079;
         </div>
      </div>
   );
}

export default Welcome;
