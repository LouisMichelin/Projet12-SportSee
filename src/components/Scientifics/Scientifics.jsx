import "./Scientifics.scss";
import { getMainData } from "../../services/APIservices";
import { useParams } from "react-router-dom";

function Scientifics({ imageSrc, imageAlt }) {
   // ID depuis userParams()
   const { id } = useParams();
   // Function API
   const userData = getMainData(id);
   // Valeurs pour "Default User"
   const defaultValues = {
      keyData: {
         calorieCount: 1930,
         proteinCount: 155,
         carbohydrateCount: 290,
         lipidCount: 50,
      },
   };

   // Array des données affichées
   const graphData = [];

   // Si "Default User" // Sinon "User" avec ID connu
   if (id == undefined) {
      graphData.push(defaultValues.keyData);
      console.log(graphData);
   } else if (id) {
      // userTodayScore = userData.todayScore;
   } // else if (!isDataMocked) {}

   return (
      <div className="ScientificWrapper">
         <img src={imageSrc} alt={imageAlt} />
         <div className="ScientificTitleWrapper">
            <div className="ScientificTitle">2,000kCal</div>
            <div className="ScientificDescription">calories</div>
         </div>
      </div>
   );
}

export default Scientifics;
