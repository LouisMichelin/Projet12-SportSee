import "./Scientifics.scss";
import { getMainData } from "../../services/APIservices";

function Scientifics({ useParamID, imageSrc, imageAlt, category }) {
   // Function API
   const userData = getMainData(useParamID);
   // Valeurs pour "Default User"
   const defaultValues = {
      keyData: {
         calorieCount: 1337,
         proteinCount: 123,
         carbohydrateCount: 555,
         lipidCount: 42,
      },
   };
   let displayedData;
   // Si "Default User" // Sinon "User" avec ID connu
   if (id == undefined) {
      displayedData = defaultValues.keyData;
   } else if (id) {
      displayedData = userData.keyData;
      // userTodayScore = userData.todayScore;
   } // else if (!isDataMocked) {}

   // FAIRE UN .MAP / .FOREACH DEPUIS <DASHBOARD /> pour simplifier
   return (
      <div className="ScientificWrapper">
         <img src={imageSrc} alt={imageAlt} />
         <div className="ScientificTitleWrapper">
            <div className="ScientificTitle">
               {displayedData.calorieCount + "kCal"}
            </div>
            <div className="ScientificDescription">calories</div>
         </div>
      </div>
   );
}

export default Scientifics;
