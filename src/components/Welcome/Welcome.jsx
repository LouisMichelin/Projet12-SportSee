import "./Welcome.scss";
import { getMainData } from "../../services/APIservices";

function Welcome() {
   const welcomeUserID = getMainData(12);
   const welcomeUserFirstName = welcomeUserID.userInfos.firstName;

   return (
      <div className="WelcomeWrapper">
         <div className="WelcomeMessage">
            Bonjour&nbsp;
            <span id="WelcomeName" style={{ color: "#FF0101" }}>
               {welcomeUserFirstName}
            </span>
         </div>
         <div className="WelcomeMessageCongrats">
            Félicitation ! Vous avez explosé vos objectifs hier &#128079;
         </div>
      </div>
   );
}

export default Welcome;
