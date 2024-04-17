import "./Score.scss";
import { getMainData } from "../../services/APIservices";
import {
   PieChart,
   RadialBarChart,
   Pie,
   RadialBar,
   Legend,
   ResponsiveContainer,
   PolarAngleAxis,
   Label,
   Cell,
} from "recharts";

// // Style du Radial Chart
const style = {
   // top: "50%",
   // right: 0,
   // transform: "translate(0, -50%)",
   lineHeight: "24px",
   width: "70px",
};

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
            <p className="description">de votre objectif</p>
         </div>
      );
   };

   return (
      <div className="ScoreWrapper">
         <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
               startAngle={90}
               endAngle={450}
               // cx="50%"
               // cy="50%"
               // innerRadius="75%"
               innerRadius="80%"
               outerRadius="90%"
               data={graphData}
               style={{ position: "absolute", width: "200px", height: "200px" }}
            >
               <RadialBar dataKey="uv" cornerRadius={20} />
               <PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
               <Legend content={RenderCustomizedLegend} />
            </RadialBarChart>
         </ResponsiveContainer>
      </div>
   );
}

export default Score;
