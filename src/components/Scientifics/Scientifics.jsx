import "./Scientifics.scss";
import { getMainData } from "../../services/APIservices";

function Scientifics({ useParamID, imageSrc, imageAlt, category }) {
   // Function API
   const userData = getMainData(useParamID).keyData;

   let scientificCase;
   let scientificName;
   let scientificUnits;

   switch (category) {
      case "calorieCount":
         scientificCase = userData.calorieCount.toLocaleString("en-US");
         scientificName = "Calories";
         scientificUnits = "kCal";
         break;
      case "proteinCount":
         scientificCase = userData.proteinCount;
         scientificName = "Proteines";
         scientificUnits = "g";
         break;
      case "carbohydrateCount":
         scientificCase = userData.carbohydrateCount;
         scientificName = "Glucides";
         scientificUnits = "g";
         break;
      case "lipidCount":
         scientificCase = userData.lipidCount;
         scientificName = "Lipides";
         scientificUnits = "g";
         break;
      default:
         alert("NOPE Error from Switch().");
   }

   return (
      <div className="ScientificWrapper">
         <img src={imageSrc} alt={imageAlt} />
         <div className="ScientificTitleWrapper">
            <div className="ScientificTitle">
               {scientificCase + scientificUnits}
            </div>
            <div className="ScientificDescription">{scientificName}</div>
         </div>
      </div>
   );
}

export default Scientifics;
