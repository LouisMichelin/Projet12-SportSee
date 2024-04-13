import "./Score.scss";
import { getMainData } from "../../services/APIservices";
// import React, { PureComponent } from "react";
import {
   RadialBarChart,
   RadialBar,
   Legend,
   ResponsiveContainer,
   PolarAngleAxis,
} from "recharts";
import { useParams } from "react-router-dom";

// Style du Radial Chart
const style = {
   top: "50%",
   right: 0,
   transform: "translate(0, -50%)",
   lineHeight: "24px",
};

function Score() {
   // ID depuis userParams()
   const { id } = useParams();
   // Function API
   const userData = getMainData(id);
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
         <ResponsiveContainer width="100%" height="100%">
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
            </RadialBarChart>
         </ResponsiveContainer>
      </div>
   );
}

export default Score;
