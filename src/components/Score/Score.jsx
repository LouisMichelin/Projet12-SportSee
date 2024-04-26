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

function Score({ useParamID }) {
   const [userDataFetched, setUserDataFetched] = useState([]);
   const [userScoreDisplayed, setUserScoreDisplayed] = useState(0);
   const [canRunFunction, setCanRunFunction] = useState(true);

   useEffect(() => {
      // Function Async fetchData() récupère les données :
      async function fetchData() {
         const reponse = await getMainData(useParamID);
         // Reset des useState() :
         setUserDataFetched([]);
         setUserScoreDisplayed(0);
         // setUseState() du Score affiché :
         const userScore = reponse.score ? reponse.score : reponse.todayScore;
         setUserScoreDisplayed(userScore * 100);
         // setUseState() du Radar Recharts :
         setUserDataFetched((userDataFetched) => [
            ...userDataFetched,
            {
               name: "objectif",
               score: userScore,
               fill: "#FF0000",
            },
         ]);
      }
      // Break Infinite Loop :
      if (canRunFunction) {
         setCanRunFunction(!canRunFunction);
         fetchData();
      }
   }),
      [useParamID];

   const RenderCustomizedLegend = () => {
      return (
         <div className="legendWrapper">
            <div className="score">{userScoreDisplayed}%</div>
            <div className="description">de votre objectif</div>
         </div>
      );
   };

   return (
      <div className="ScoreWrapper">
         <h3 className="ScoreTitle">Score</h3>
         <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
               data={userDataFetched}
               width={730}
               height={250}
               startAngle={90}
               endAngle={450}
               innerRadius="65%"
               outerRadius="75%"
            >
               <Legend content={RenderCustomizedLegend} />
               <RadialBar
                  dataKey="score"
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
