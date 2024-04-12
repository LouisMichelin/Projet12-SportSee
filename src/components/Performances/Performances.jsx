import "./Performances.scss";
import { getPerformanceData } from "../../services/APIservices";
import React, { PureComponent } from "react";
import {
   Radar,
   RadarChart,
   PolarGrid,
   PolarAngleAxis,
   PolarRadiusAxis,
   ResponsiveContainer,
} from "recharts";
import { useParams } from "react-router-dom";

function Performances() {
   // ID depuis userParams()
   const { id } = useParams();
   // Function API
   const userData = getPerformanceData(id);
   // Array des données affichées
   let graphData = [];
   // Valeurs pour "Default User"
   const defaultValues = [
      {
         subject: "Intensité",
         A: 10,
         B: 10,
         fullMark: 20,
      },
      {
         subject: "Vitesse",
         A: 20,
         B: 20,
         fullMark: 40,
      },
      {
         subject: "Force",
         A: 30,
         B: 30,
         fullMark: 60,
      },
      {
         subject: "Endurance",
         A: 40,
         B: 40,
         fullMark: 80,
      },
      {
         subject: "Energie",
         A: 50,
         B: 50,
         fullMark: 100,
      },
      {
         subject: "Cardio",
         A: 60,
         B: 60,
         fullMark: 120,
      },
   ];

   // else if (!isDataMocked) {}

   return (
      <div className="PerformancesWrapper">
         {/* <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
               <PolarGrid innerRadius={0} radialLines={false} />

               <PolarAngleAxis
                  dataKey="subject"
                  // axisLine="false"
                  // tickLine="false"
               />
               <Radar
                  // dot={false}
                  // name="Mike"
                  dataKey="A"
                  // stroke="#8884d8"
                  fill="#FF0101B2"
                  // fillOpacity={0.7}
                  // legendType="none"
               />
            </RadarChart>
         </ResponsiveContainer> */}
         1337
      </div>
   );
}

export default Performances;
