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
   top: "50%",
   right: 0,
   transform: "translate(0, -50%)",
   lineHeight: "24px",
};

function Score({ useParamID }) {
   const userData = getMainData(useParamID);
   const userScore = userData.score ? userData.score : userData.todayScore;

   const graphData = [
      {
         name: `${userScore * 100}% de votre objectif`,
         uv: userScore,
         fill: "#FF0000",
      },
   ];

   // return (
   //    <div className="ScoreWrapper">
   //       <div>{userScore}</div>
   //       {/* <PieChart width={230} height={170}>
   //          <Pie
   //             domain={[0, 360]}
   //             isAnimationActive={false}
   //             // data={data01}

   //             fill="#8884d8"
   //             startAngle={-270}
   //             minAngle={0}
   //             // dataKey={graphData}
   //             cx="50%"
   //             cy="50%"
   //             dataKey="value"
   //             innerRadius={70}
   //             outerRadius={80}
   //          >
   //             {graphData.map((graphData, index) => {
   //                if (index === 1) {
   //                   return (
   //                      <Cell
   //                         key={`cell-${index}`}
   //                         radius={[10, 10, 10, 10]}
   //                         fill="#f3f6f9"
   //                      />
   //                   );
   //                }
   //                return <Cell key={`cell-${index}`} fill="red" />;
   //             })}
   //             <Label
   //                value={graphData[0].value + "%"}
   //                position="center"
   //                fill="black"
   //                style={{
   //                   fontSize: "25px",
   //                   fontWeight: "bold",
   //                }}
   //             />
   //          </Pie>
   //       </PieChart> */}
   //       <div className="txt-pourc">de votre objectif</div>
   //    </div>
   // );
   ///////////////////////////////////////////////////////////////////////
   // const LegendGoal = () => {
   //    const userScore = userData.score;
   //    return (
   //       <div className="score-container">
   //          <span className="score">{userScore ? userScore * 100 : 0}%</span>
   //          <div>
   //             <p className="description">de votre objectif</p>
   //          </div>
   //       </div>
   //    );
   // };
   return (
      <div className="ScoreWrapper">
         <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
               startAngle={90}
               endAngle={450}
               // innerRadius="75%"
               innerRadius="80%"
               outerRadius="90%"
               data={graphData}
            >
               <RadialBar dataKey="uv" cornerRadius={20} />
               <PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
               <Legend
                  iconSize={0}
                  verticalAlign="middle"
                  align="center"
                  wrapperStyle={style}
                  width={100}
                  right={100}
               />
               <Label></Label>
            </RadialBarChart>
         </ResponsiveContainer>
      </div>
   );
}

export default Score;

// OLD RADIALBAL CHART
/* <ResponsiveContainer width="100%" height="100%">
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
         </ResponsiveContainer> */

/*
 <ResponsiveContainer>
            <RadialBarChart
               cx="50%"
               cy="50%"
               innerRadius="80%"
               outerRadius="90%"
               barSize={15}
               data={formatData}
               startAngle={90}
               endAngle={360 + 90}
            >
               <PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
               <RadialBar
                  minAngle={15}
                  dataKey="score"
                  fill="red"
                  cornerRadius={20}
               />{" "}
               <Legend
                  width={180}
                  height={180}
                  layout="vertical"
                  verticalAlign="middle"
                  align="center"
                  content={<LegendGoal />}
               />
               <circle cx="50%" cy="50%" fill="white" r="33%"></circle>
            </RadialBarChart>
         </ResponsiveContainer>
*/
