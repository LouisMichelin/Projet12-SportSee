import "./Performances.scss";
import {
   Radar,
   RadarChart,
   PolarGrid,
   PolarAngleAxis,
   ResponsiveContainer,
} from "recharts";
import { getPerformanceData } from "../../services/APIservices";
import { useEffect, useState } from "react";

function Performances({ useParamID }) {
   const [userDataFetched, setUserDataFetched] = useState([]);
   const [canRunFunction, setCanRunFunction] = useState(true);

   useEffect(() => {
      // Function Async fetchData() récupère les données :
      async function fetchData() {
         const reponse = await getPerformanceData(useParamID);
         // Reset du useState() :
         setUserDataFetched([]);
         // Setup de l'Array Customized pour le Recharts :
         for (let i = 0; i < reponse.data.length; i++) {
            setUserDataFetched((userDataFetched) => [
               ...userDataFetched,
               {
                  subject: reponse.kind[i + 1],
                  intensity: reponse.data[i].value,
               },
            ]);
         }
      }
      // Break Infinite Loop :
      if (canRunFunction) {
         setCanRunFunction(!canRunFunction);
         fetchData();
      }
   });

   // Couleur des Labels + Majuscules
   function customTick({ payload, x, y, textAnchor, stroke, radius }) {
      return (
         <g className="recharts-layer recharts-polar-angle-axis-tick">
            <text
               radius={radius}
               stroke={stroke}
               x={x}
               y={y}
               className="recharts-text recharts-polar-angle-axis-tick-value"
               textAnchor={textAnchor}
               fontSize={12}
               fontWeight={500}
               fill="#ffffff"
               style={{ textTransform: "capitalize" }}
            >
               <tspan x={x} dy="0em">
                  {payload.value}
               </tspan>
            </text>
         </g>
      );
   }

   return (
      <div className="PerformancesWrapper">
         <ResponsiveContainer width="100%" height="100%">
            <RadarChart
               cx="50%"
               cy="50%"
               outerRadius="70%"
               data={userDataFetched}
            >
               <PolarGrid radialLines={false} />
               <PolarAngleAxis
                  dataKey="subject"
                  fontSize={12}
                  tick={customTick}
               />
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
