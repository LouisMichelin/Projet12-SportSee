import "./Score.scss";
import {
   RadialBarChart,
   RadialBar,
   Legend,
   ResponsiveContainer,
   PolarAngleAxis,
} from "recharts";
import { getMainData } from "../../services/APIservices";
import { useEffect, useState } from "react";

// // // Style du Radial Chart
// const style = {
//    // top: "50%",
//    // right: 0,
//    // transform: "translate(0, -50%)",
//    lineHeight: "24px",
//    width: "70px",
// };

function Score({ useParamID }) {
   const userData = getMainData(useParamID);
   console.log(userData);
   const userScore = userData.score ? userData.score : userData.todayScore;
   console.log(userScore);

   const graphData = [
      {
         name: "objectif",
         uv: userScore,
         fill: "#FF0000",
      },
   ];

   const RenderCustomizedLegend = () => {
      return (
         <div className="legendWrapper">
            <div className="score">{userScore ? userScore * 100 : 0}%</div>
            <div className="description">de votre objectif</div>
         </div>
      );
   };

   return (
      <div className="ScoreWrapper">
         <h3 className="ScoreTitle">Score</h3>
         <ResponsiveContainer
            width="100%"
            height="100%"

            // wrapperStyle={{ position: "relative" }}
         >
            <RadialBarChart
               width={730}
               height={250}
               // wrapperStyle={{ position: "absolute" }}
               startAngle={90}
               endAngle={450}
               // cx="50%"
               // cy="50%"
               // innerRadius="75%"
               innerRadius="65%"
               outerRadius="75%"
               data={graphData}
               // style={{ position: "absolute", width: "200px", height: "200px" }}
               // style={{ position: "absolute" }}
            >
               <Legend
                  content={RenderCustomizedLegend}
                  // verticalAlign="middle"
                  // align="center"
               />
               <RadialBar
                  dataKey="uv"
                  cornerRadius={20}
                  style={{ zIndex: "2", position: "absolute" }}
               />
               <PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
            </RadialBarChart>
         </ResponsiveContainer>
      </div>
   );
}

export default Score;
