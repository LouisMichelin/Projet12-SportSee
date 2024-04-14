import "./Score.scss";
import { getMainData } from "../../services/APIservices";
// import React, { PureComponent } from "react";
import {
   PieChart,
   // RadialBarChart,
   Pie,
   RadialBar,
   Legend,
   ResponsiveContainer,
   PolarAngleAxis,
   Label,
} from "recharts";

// Style du Radial Chart
const style = {
   top: "50%",
   right: 0,
   transform: "translate(0, -50%)",
   lineHeight: "24px",
};

function Score({ useParamID }) {
   const userData = getMainData(useParamID);
   // Valeurs pour "Default User"
   const defaultValues = { score: 0.42 };
   let userTodayScore;
   // Si "Default User" // Sinon "User" avec ID connu
   if (id == undefined) {
      userTodayScore = defaultValues.score;
   } else if (id) {
      userTodayScore = userData.todayScore;
   } // else if (!isDataMocked) {}

   // Array des données affichées
   const graphData = [
      {
         name: `${userTodayScore * 100}% de votre objectif`,
         uv: userTodayScore,
         fill: "#FF0000",
      },
   ];

   return (
      <div className="ScoreWrapper">
         {/* <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
               startAngle={90}
               endAngle={450}
               innerRadius="75%"
               data={graphData}
            >
               <RadialBar dataKey="uv" />
               <PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
               <Legend
                  iconSize={0}
                  verticalAlign="middle"
                  align="center"
                  wrapperStyle={style}
               />
               <Label></Label>
            </RadialBarChart>
         </ResponsiveContainer> */}
         <PieChart width={230} height={170}>
            <Pie
               startAngle={-270}
               data={graphData}
               cx="50%"
               cy="50%"
               dataKey="value"
               innerRadius={70}
               outerRadius={80}
            >
               {data.map((entry, index) => {
                  if (index === 1) {
                     return (
                        <Cell
                           key={`cell-${index}`}
                           radius={[10, 10, 10, 10]}
                           fill="#f3f6f9"
                        />
                     );
                  }
                  return <Cell key={`cell-${index}`} fill="red" />;
               })}
               <Label
                  value={graphData[0].value + "%"}
                  position="center"
                  fill="black"
                  style={{
                     fontSize: "25px",
                     fontWeight: "bold",
                  }}
               />
            </Pie>
         </PieChart>
         <div className="txt-pourc">de vorte objectif</div>
      </div>
   );
}

export default Score;
