import "./Score.scss";
import { getMainData } from "../../services/APIservices";

let userId = 12;

function Score() {
   // Si la sessionStorage est null alors on appelle la fonction API getPerformanceData()
   if (sessionStorage.getItem("mainData") == null) {
      getMainData(userId);
   }
   const mainData = JSON.parse(sessionStorage.getItem("mainData"));
   if (mainData.data.id != userId) {
      getMainData(userId);
   }
   // Utilisation des Data "fetched"
   /////////////////////////////////

   return <div className="ScoreWrapper">Hello World</div>;
}

export default Score;
