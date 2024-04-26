import "./Scientifics.scss";
import { getMainData } from "../../services/APIservices";
import { useEffect, useState } from "react";

function Scientifics({ useParamID, imageSrc, imageAlt, category }) {
   const [userDataFetched, setUserDataFetched] = useState([]);
   const [scientificName, setScientificName] = useState("");
   const [scientificUnits, setScientificUnits] = useState("");
   const [canRunFunction, setCanRunFunction] = useState(true);

   useEffect(() => {
      // Function Async fetchData() récupère les données :
      async function fetchData() {
         const reponse = await getMainData(useParamID);
         // Reset du useState() :
         setUserDataFetched([]);
         // Switch pour le useState() :
         switch (category) {
            case "calorieCount":
               setUserDataFetched((userDataFetched) => [
                  ...userDataFetched,
                  reponse.keyData.calorieCount,
               ]);
               setScientificName("Calories");
               setScientificUnits("kCal");
               break;
            case "proteinCount":
               setUserDataFetched((userDataFetched) => [
                  ...userDataFetched,
                  reponse.keyData.proteinCount,
               ]);
               setScientificName("Proteines");
               setScientificUnits("g");
               break;
            case "carbohydrateCount":
               setUserDataFetched((userDataFetched) => [
                  ...userDataFetched,
                  reponse.keyData.carbohydrateCount,
               ]);
               setScientificName("Glucides");
               setScientificUnits("g");
               break;
            case "lipidCount":
               setUserDataFetched((userDataFetched) => [
                  ...userDataFetched,
                  reponse.keyData.lipidCount,
               ]);
               setScientificName("Lipides");
               setScientificUnits("g");
               break;
            default:
               console.log("Error from Switch()");
         }
      }
      // Break Infinite Loop :
      if (canRunFunction) {
         setCanRunFunction(!canRunFunction);
         fetchData();
      }
   }),
      [useParamID];

   return (
      <div className="ScientificWrapper">
         <img src={imageSrc} alt={imageAlt} />
         <div className="ScientificTitleWrapper">
            <div className="ScientificTitle">
               {userDataFetched.toLocaleString("en-US") + scientificUnits}
            </div>
            <div className="ScientificDescription">{scientificName}</div>
         </div>
      </div>
   );
}

export default Scientifics;
