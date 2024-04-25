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
   const [userDataFetched, setUserDataFetched] = useState([]);
   const [userScoreDisplayed, setUserScoreDisplayed] = useState(0);
   const [canRunFunction, setCanRunFunction] = useState(true);

   useEffect(() => {
      // Function Async fetchData() récupère les données :
      async function fetchData() {
         const reponse = await getMainData(useParamID);
         // Reset du useState() :
         setUserDataFetched([]);
         setUserScoreDisplayed(0);
         // setUseState() du Score affiché :
         const userScore = reponse.score ? reponse.score : reponse.todayScore;
         setUserScoreDisplayed(userScore * 100);

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
   });
   // console.log("allDataFetched: ", userDataFetched);

   /////////////////////////////////////////////////////////////////////////////
   // const userData = getMainData(useParamID);
   // console.log(userData);
   // const userScore = userData.score ? userData.score : userData.todayScore;
   // console.log(userScore);

   // const graphData = [
   //    {
   //       name: "objectif",
   //       uv: userScore,
   //       fill: "#FF0000",
   //    },
   // ];

   const RenderCustomizedLegend = () => {
      return (
         <div className="legendWrapper">
            <div className="score">{userScoreDisplayed}%</div>
            {/* <div className="score">{userScore ? userScore * 100 : 0}%</div> */}
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
