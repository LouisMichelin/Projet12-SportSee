import { useState, useEffect } from "react";
import "./Daily.scss";
import { scaleLog, scaleSymlog } from "d3-scale";
import {
   Tooltip,
   Legend,
   ResponsiveContainer,
   BarChart,
   Bar,
   // CartesianAxis,
   // Line,
   LineChart,
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
   const RenderCustomizedLegend = () => {
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

   const CustomizedAxisTickX = ({ x, y, stroke, payload }) => {
      return (
         <g transform={`translate(${x},${y})`}>
            <text x={0} y={0} dy={30} fill="#9B9EAC">
               {payload.value}
            </text>
         </g>
      );
   };
   const CustomizedAxisTickY = ({ x, y, stroke, payload }) => {
      return (
         <g transform={`translate(${x},${y})`}>
            <text x={0} y={0} dy={5} dx={30} textAnchor="center" fill="#9B9EAC">
               {payload.value}
            </text>
         </g>
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
                     left: 50,
                     bottom: 5,
                  }}
                  // margin={0}
                  barSize={10}
                  maxBarSize={5}
                  barGap={8}
               >
                  <Legend
                     verticalAlign="top"
                     // iconType="circle"
                     content={RenderCustomizedLegend}
                  />
                  <CartesianGrid strokeDasharray="2" vertical={false} />
                  <ReferenceLine x="0" />
                  <XAxis
                     dataKey="day"
                     height={60}
                     width={50}
                     tickLine={false}
                     axisLine={{ stroke: "#d1d2d6" }}
                     tick={CustomizedAxisTickX}
                     padding={{ left: -50, right: -50 }}
                  />
                  <YAxis
                     dataKey={"calories"}
                     tick={CustomizedAxisTickY}
                     orientation="right"
                     type="number"
                     domain={[0, "auto"]}
                     interval={1}
                     axisLine={false}
                     tickLine={false}
                     width={90}
                  />
                  <Tooltip
                     content={CustomTooltip}
                     cursor={{ fill: "#C4C4C480" }}
                     width={20}
                  />
                  <Bar
                     color="#74798c"
                     name="Poids (kg)"
                     dataKey="poids"
                     fill="black"
                     // barSize={10}
                     radius={[4.5, 4.5, 0, 0]}
                     // paddingRight={50}
                     scaling={1}
                  />
                  <Bar
                     color="#74798c"
                     name="Calories brûlées (kCal)"
                     dataKey="calories"
                     fill="red"
                     // barSize={10}
                     radius={[4.5, 4.5, 0, 0]}
                     scaling={0.5}
                  />
               </BarChart>
            </ResponsiveContainer>
         </>
      </div>
   );
}

export default Daily;
