import "./Performances.scss";
import { getPerformanceData } from "../../services/APIservices";
// import React, { PureComponent } from "react";
import {
   Radar,
   RadarChart,
   PolarGrid,
   PolarAngleAxis,
   PolarRadiusAxis,
   ResponsiveContainer,
} from "recharts";

function Performances({ useParamID }) {
   // Function API
   const userData = getPerformanceData(useParamID);
   // Array des données affichées
   let graphData = [];
   // Valeurs pour "Default User"
   const defaultValues = [
      {
         subject: "Intensité",
         intensity: 20,
      },
      {
         subject: "Vitesse",
         intensity: 40,
      },
      {
         subject: "Force",
         intensity: 60,
      },
      {
         subject: "Endurance",
         intensity: 80,
      },
      {
         subject: "Energie",
         intensity: 100,
      },
      {
         subject: "Cardio",
         intensity: 120,
      },
   ];
   // Si "Default User" // Sinon "User" avec ID connu
   if (id == undefined) {
      defaultValues.forEach((element, index) => {
         graphData.push({
            subject: element.subject,
            intensity: element.intensity,
         });
      });
   } else if (id) {
      userData.data.forEach((element, index) => {
         graphData.push({
            subject: userData.kind[index + 1],
            intensity: element.value,
         });
      });
   } // else if (!isDataMocked) {}

   function radarLabel() {}

   return (
      <div className="PerformancesWrapper">
         <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={graphData}>
               <PolarGrid radialLines={false} color="white" />
               <PolarAngleAxis dataKey="subject" fontSize={12} />
               <Radar
                  name="Mike"
                  dataKey="intensity"
                  fill="#FF0101"
                  fillOpacity={0.6}
               />
            </RadarChart>
         </ResponsiveContainer>
      </div>
   );
}

export default Performances;
