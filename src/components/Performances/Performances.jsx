import "./Performances.scss";
import { getPerformanceData } from "../../services/APIservices";

let userId = 12;

function Performances() {
   // Si la sessionStorage est null alors on appelle la fonction API getPerformanceData()
   if (sessionStorage.getItem("performanceData") == null) {
      getPerformanceData(userId);
   }
   const performanceData = JSON.parse(
      sessionStorage.getItem("performanceData")
   );
   if (performanceData.data.id != userId) {
      getPerformanceData(userId);
   }
   // Utilisation des Data "fetched"
   /////////////////////////////////

   return <div className="PerformancesWrapper">Hello World</div>;
}

export default Performances;
