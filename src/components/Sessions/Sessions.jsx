import "./Sessions.scss";
import { getAverageData } from "../../services/APIservices";

let userId = 12;

function Sessions() {
   // Si la sessionStorage est null alors on appelle la fonction API getAverageData()
   if (sessionStorage.getItem("averageData") == null) {
      getAverageData(userId);
   }
   const averageData = JSON.parse(sessionStorage.getItem("averageData"));
   if (averageData.data.id != userId) {
      getAverageData(userId);
   }
   // Utilisation des Data "fetched"
   /////////////////////////////////

   return <div className="SessionsWrapper">Hello World</div>;
}

export default Sessions;
