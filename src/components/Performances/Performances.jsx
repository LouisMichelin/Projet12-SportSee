import "./Performances.scss";
import { getPerformanceData } from "../../services/APIservices";

import {
   Radar,
   RadarChart,
   PolarGrid,
   PolarAngleAxis,
   ResponsiveContainer,
} from "recharts";

function Performances({ useParamID }) {
   const userData = getPerformanceData(useParamID);

   let graphData = [];

   // Regroupement des datas "KIND" & "DATA" dans graphData[]
   userData.data.forEach((element, index) => {
      graphData.push({
         subject: userData.kind[index + 1],
         intensity: element.value,
      });
   });
   graphData.reverse();
   console.log(graphData);

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
               text-anchor={textAnchor}
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
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={graphData}>
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
