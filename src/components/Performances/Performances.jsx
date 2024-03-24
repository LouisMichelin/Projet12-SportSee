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

let userId = 12;
const data = [
   {
      subject: "Intensité",
      A: 120,
      B: 110,
      fullMark: 150,
   },
   {
      subject: "Vitesse",
      A: 98,
      B: 130,
      fullMark: 150,
   },
   {
      subject: "Force",
      A: 86,
      B: 130,
      fullMark: 150,
   },
   {
      subject: "Endurance",
      A: 99,
      B: 100,
      fullMark: 150,
   },
   {
      subject: "Physics",
      A: 85,
      B: 90,
      fullMark: 150,
   },
   {
      subject: "History",
      A: 65,
      B: 85,
      fullMark: 150,
   },
];

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

   return (
      <div className="PerformancesWrapper">
         <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
               <PolarGrid innerRadius={0} />
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
         </ResponsiveContainer>
      </div>
   );
}

export default Performances;
