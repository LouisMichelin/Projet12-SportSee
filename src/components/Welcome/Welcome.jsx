import "./Welcome.scss";
import { getMainData } from "../../services/APIservices";

let userIdKarl = 12;
let userIdCecilia = 18;

function Welcome() {
   // Si sessionStorage est vide, alors on appelle la fonction API avec l'ID de Cecilia;
   if (sessionStorage.getItem("profile") == null) {
      sessionStorage.setItem("profile", userIdCecilia);
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
   // Puis définition du "firstName" de l'utilisateur;
   const firstName = mainData.data.userInfos.firstName;
   console.log(firstName);

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
