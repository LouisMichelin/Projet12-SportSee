import { useState, useEffect } from "react";
import "./Daily.scss";
import {
   Tooltip,
   Legend,
   ResponsiveContainer,
   BarChart,
   Bar,
   // Line,
   // LineChart,
   // Rectangle,
   ReferenceLine,
   XAxis,
   YAxis,
   CartesianGrid,
} from "recharts";
import { getActivityData } from "../../services/APIservices";

let userId = 12;

function Daily() {
   getActivityData(userId); // Fonction FETCH() pour données de USER_ACTIVITY
   const activityData = JSON.parse(localStorage.getItem("activityData")); // Récupération des DATA LOCALES
   const userSessions = activityData.data.sessions;
   const graphData = []; // PUSH de chaque SESSION dans graphData[]
   userSessions.forEach((element, index) => {
      graphData.push({
         day: index,
         poids: element.kilogram,
         calories: element.calories,
      });
   });

   // CUSTOMIZED TOOLTIP
   const CustomTooltip = ({ active, payload }) => {
      if (active && payload && payload.length) {
         return (
            <div
               style={{
                  backgroundColor: "red",
                  width: "55px",
                  height: "75px",
                  color: "#ffffff",
                  fontSize: "12px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
               }}
            >
               <p className="label" style={{ margin: "10px" }}>
                  {`${payload[0].value}kg`}
               </p>
               <p className="label" style={{ margin: "10px" }}>
                  {`${payload[1].value}Kcal`}
               </p>
            </div>
         );
      }
      return null;
   };

   // CUSTOMIZED LEGEND
   const RenderCustomizedLegend = ({ dataKey, active, payLoad }) => {
      return (
         <div className="LegendWrapper">
            <div className="LegendPoids">
               <div
                  className="LegendCircle"
                  style={{ backgroundColor: "black" }}
               ></div>
               <div>Poids (kg)</div>
            </div>
            <div className="LegendCalories">
               <div
                  className="LegendCircle"
                  style={{ backgroundColor: "red" }}
               ></div>
               <div>Calories brûlées (kCal)</div>
            </div>
         </div>
      );
   };

   return (
      <div className="DailyWrapper">
         <>
            <div className="DailyTitle">Activité quotidienne</div>
            <ResponsiveContainer width="100%" height="100%">
               <BarChart
                  width={700}
                  height={300}
                  data={graphData}
                  margin={{
                     top: 30,
                     right: 10,
                     left: 40,
                     bottom: 5,
                  }}
               >
                  <Legend
                     // margin="10%"
                     // layout="horizontal"
                     verticalAlign="top"
                     // align="right"
                     // height={50}
                     iconType="circle"
                     // wrapperStyle={{ color: "green" }}
                     content={RenderCustomizedLegend}
                  />

                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <ReferenceLine x="0" />
                  <XAxis dataKey="day" />
                  <YAxis
                     orientation="right"
                     type="number"
                     domain={[0, "auto"]}
                     interval={1}
                  />
                  <Tooltip content={CustomTooltip} />
                  <Bar
                     color="#74798c"
                     name="Poids (kg)"
                     dataKey="poids"
                     fill="black"
                     barSize={10}
                     radius={[4.5, 4.5, 0, 0]}
                     paddingRight={5}
                     scaling={1}
                  />
                  <Bar
                     color="#74798c"
                     name="Calories brûlées (kCal)"
                     dataKey="calories"
                     fill="red"
                     barSize={10}
                     radius={[4.5, 4.5, 0, 0]}
                     scaling={0.5}
                  />
                  {/* <Line
                     type="monotone"
                     dataKey="poids"
                     stroke="#8884d8"
                     color="cyan"
                  />
                  <Line
                     type="calories"
                     dataKey="uv"
                     stroke="#82ca9d"
                     color="cyan"
                  /> */}
               </BarChart>
            </ResponsiveContainer>
         </>
      </div>
   );
}

export default Daily;
