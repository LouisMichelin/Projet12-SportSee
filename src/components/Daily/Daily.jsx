import "./Daily.scss";
import {
   Tooltip,
   Legend,
   ResponsiveContainer,
   BarChart,
   Bar,
   XAxis,
   YAxis,
   CartesianGrid,
} from "recharts";
import { getActivityData } from "../../services/APIservices";

function Daily({ useParamID }) {
   const userData = getActivityData(useParamID).sessions;
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
   let graphData = [];
   userData.forEach((element, index) => {
      graphData.push({
         day: index + 1, // (Jours 1-7 et non pas 0-6)
         kilogram: element.kilogram,
         calories: element.calories,
      });
   });

   return (
      <div className="DailyWrapper">
         <div className="DailyTitle">Activité quotidienne</div>
         <ResponsiveContainer width="100%" height="100%">
            <BarChart
               data={graphData}
               margin={{
                  top: 30,
                  right: 10,
                  left: 50,
                  bottom: 5,
               }}
               barSize={10}
               barGap={8}
            >
               <CartesianGrid strokeDasharray="2" vertical={false} />
               {/*ABSCISSES*/}
               <XAxis
                  dataKey="day"
                  height={60}
                  width={"auto"}
                  tickLine={false}
                  axisLine={{ stroke: "#d1d2d6" }}
                  padding={{ left: -40, right: -40 }}
                  dy={15}
                  style={{
                     fontWeight: "600",
                     fontSize: "14px",
                     fill: "#9B9EAC",
                  }}
               />
               {/*POIDS*/}
               <YAxis
                  yAxisId="right"
                  orientation="right"
                  axisLine={false}
                  tickLine={false}
                  style={{
                     fontWeight: "600",
                     fontSize: "14px",
                     fill: "#9B9EAC",
                  }}
                  dx={25}
                  domain={["dataMin - 1", "dataMax + 1"]}
                  interval={1}
               />
               {/*CALORIES*/}
               <YAxis
                  yAxisId="left"
                  orientation="left"
                  axisLine={false}
                  tickLine={false}
                  hide
               />
               {/*TOOLTIP (Hovering Data)*/}
               <Tooltip
                  content={CustomTooltip}
                  cursor={{ fill: "#C4C4C480" }}
               />
               {/*LEGEND*/}
               <Legend verticalAlign="top" content={RenderCustomizedLegend} />
               {/*BAR: KILOS*/}
               <Bar
                  yAxisId="right"
                  dataKey="kilogram"
                  fill="black"
                  radius={[4.5, 4.5, 0, 0]}
               />
               {/*BAR: CALORIES*/}
               <Bar
                  yAxisId="left"
                  dataKey="calories"
                  fill="red"
                  radius={[4.5, 4.5, 0, 0]}
               />
            </BarChart>
         </ResponsiveContainer>
      </div>
   );
}

export default Daily;
