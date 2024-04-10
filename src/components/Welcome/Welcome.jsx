import "./Welcome.scss";
import { getMainData } from "../../services/APIservices";
import { useParams } from "react-router-dom";

function Welcome() {
   const { id } = useParams();
   const isDataMocked = true;

   let definedID = "";

   if (id == undefined) {
      definedID = "Default";
   } else if (isDataMocked) {
      const userData = getMainData(id);
      // console.log(userData);
      const userFirstName = userData.userInfos.firstName;
      definedID = userFirstName;
   } // else if (!isDataMocked) {
   //    const fetchedFirstNameAPI = getMainData(id);
   //    definedID = fetchedFirstNameAPI;
   // }

   return (
      <div className="WelcomeWrapper">
         <div className="WelcomeMessage">
            Bonjour&nbsp;
            <span id="WelcomeName" style={{ color: "#FF0101" }}>
               {definedID}
            </span>
         </div>
         <div className="WelcomeMessageCongrats">
            Félicitation ! Vous avez explosé vos objectifs hier &#128079;
         </div>
      </div>
   );
}

export default Welcome;
