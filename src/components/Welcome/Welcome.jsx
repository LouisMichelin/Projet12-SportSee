import "./Welcome.scss";
import { getMainData } from "../../services/APIservices";
import { useParams } from "react-router-dom";

function Welcome() {
   const { id } = useParams();
   const welcomeUserID = getMainData(id);
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
