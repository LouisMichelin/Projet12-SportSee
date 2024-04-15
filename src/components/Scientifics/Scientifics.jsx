import "./Scientifics.scss";
import { getMainData } from "../../services/APIservices";

function Scientifics({ useParamID, imageSrc, imageAlt, category }) {
   // Function API
   const userData = getMainData(useParamID).keyData;

   let scientificCase;

   switch (category) {
      case "calorieCount":
         scientificCase = userData.calorieCount;
         break;
      case "proteinCount":
         scientificCase = userData.proteinCount;
         break;
      case "carbohydrateCount":
         scientificCase = userData.carbohydrateCount;
         break;
      case "lipidCount":
         scientificCase = userData.lipidCount;
         break;
      default:
         alert("NOPE Error from Switch().");
   }

   return (
      <div className="ScientificWrapper">
         <img src={imageSrc} alt={imageAlt} />
         <div className="ScientificTitleWrapper">
            <div className="ScientificTitle">{scientificCase + "kCal"}</div>
            <div className="ScientificDescription">calories</div>
         </div>
      </div>
   );
}

export default Scientifics;
