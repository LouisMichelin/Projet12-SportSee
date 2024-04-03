import "./Welcome.scss";
import { getMainData } from "../../services/APIservices";
import MonJSON from "../../data/dashboard-master/app/data/data.json";

// console.log(MonJSON);
// console.log("------------------------");
// console.log(MonJSON[0].USER_MAIN_DATA);
// console.log(MonJSON[1].USER_ACTIVITY);
// console.log(MonJSON[2].USER_AVERAGE_SESSIONS);
// console.log(MonJSON[3].USER_PERFORMANCE);
// console.log("------------------------");

let userIdKarl = 12;
let userIdCecilia = 18;

function Welcome() {
   // Si sessionStorage est vide, alors on appelle la fonction API avec l'ID de Cecilia;
   if (sessionStorage.getItem("profile") == null) {
      sessionStorage.setItem("profile", GLOBAL_USER_ID_VALUE);
   }
   // Après usage de la fonction API, on informe que "dataAPI" a été utilisé (donc TRUE);
   if (sessionStorage.getItem("dataAPI") == null) {
      sessionStorage.setItem("dataAPI", true);
   }

   // "profile" est l'ID de l'utilisateur;
   let profile = sessionStorage.getItem("profile");

   // Usage de getMainData() avec l'ID de l'utilisateur;
   getMainData(profile);

   // Import des DATA depuis sessionStorage;
   let mainData = JSON.parse(sessionStorage.mainData);
   // console.log(mainData);

   // Puis définition du "firstName" de l'utilisateur;
   const firstName = mainData.data.userInfos.firstName;
   // console.log(firstName);

   return (
      <div className="WelcomeWrapper">
         <div className="WelcomeMessage">
            Bonjour&nbsp;
            <span id="WelcomeName" style={{ color: "#FF0101" }}>
               {firstName}
            </span>
         </div>
         <div className="WelcomeMessageCongrats">
            Félicitation ! Vous avez explosé vos objectifs hier &#128079;
         </div>
      </div>
   );
}

export default Welcome;
