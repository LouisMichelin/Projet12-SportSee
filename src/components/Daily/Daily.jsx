import { useState, useEffect } from "react";
import "./Daily.scss";
import {
   Tooltip,
   Legend,
   ResponsiveContainer,
   BarChart,
   Bar,
   // Rectangle,
   ReferenceLine,
   XAxis,
   YAxis,
   CartesianGrid,
} from "recharts";
import { getActivityData } from "../../services/APIservices";

let userId = 12;

function Daily() {
   // Fonction FETCH() pour données de USER_ACTIVITY
   getActivityData(userId);
   // Récupération des DATA LOCALES
   const activityData = JSON.parse(localStorage.getItem("activityData"));
   const userSessions = activityData.data.sessions;
   // PUSH de chaque SESSION
   const graphData = [];
   userSessions.forEach((element, index) => {
      graphData.push({
         day: index,
         "Poids (kg)": element.kilogram,
         "Calories brûlées (kCal)": element.calories,
      });
   });

   // Customize Tooltip
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
                     margin="10%"
                     layout="horizontal"
                     verticalAlign="top"
                     align="right"
                     height={50}
                  />
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <ReferenceLine x="0" />
                  <XAxis dataKey="day" />
                  <YAxis
                     orientation="right"
                     type="number"
                     domain={[0, "auto"]}
                     interval={1}
                     // dataKey="Poids (kg)"
                  />
                  <Tooltip
                     // contentStyle={{ backgroundColor: "red" }}
                     itemStyle={{ backgroundColor: "red", color: "#ffffff" }}
                     content={CustomTooltip}
                  />
                  <Bar
                     dataKey="Poids (kg)"
                     fill="black"
                     barSize={10}
                     radius={[4.5, 4.5, 0, 0]}
                     paddingRight={5}
                     scaling={1}
                     // activeBar={<Rectangle fill="grey" stroke="blue" />}
                  />
                  <Bar
                     dataKey="Calories brûlées (kCal)"
                     fill="red"
                     barSize={10}
                     radius={[4.5, 4.5, 0, 0]}
                     scaling={0.5}

                     // activeBar={<Rectangle fill="orange" stroke="purple" />}
                  />
               </BarChart>
            </ResponsiveContainer>
         </>
      </div>
   );
}

export default Daily;
