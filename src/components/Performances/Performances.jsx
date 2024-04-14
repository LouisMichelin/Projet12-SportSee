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
