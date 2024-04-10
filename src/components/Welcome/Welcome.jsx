import "./Welcome.scss";
import { getMainData } from "../../services/APIservices";
import { useParams } from "react-router-dom";

function Welcome() {
   const { id } = useParams();
   let defaultID;

   if (id == undefined) {
      defaultID = "Default";
      console.log("ID VALUE === UNDEFINED : ", id);
   } else {
      const userID = getMainData(id);
      const userFirstName = userID.userInfos.firstName;
      defaultID = userFirstName;
      console.log("ID VALUE === USER ID : ", id);
   }

   return (
      <div className="WelcomeWrapper">
         <div className="WelcomeMessage">
            Bonjour&nbsp;
            <span id="WelcomeName" style={{ color: "#FF0101" }}>
               {defaultID}
            </span>
         </div>
         <div className="WelcomeMessageCongrats">
            Félicitation ! Vous avez explosé vos objectifs hier &#128079;
         </div>
      </div>
   );
}

export default Welcome;
