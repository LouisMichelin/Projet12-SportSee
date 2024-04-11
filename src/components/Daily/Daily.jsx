import "./Daily.scss";
import {
   Tooltip,
   Legend,
   ResponsiveContainer,
   BarChart,
   Bar,
   ReferenceLine,
   XAxis,
   YAxis,
   CartesianGrid,
} from "recharts";
import { getActivityData } from "../../services/APIservices";
import { useParams } from "react-router-dom";

function Daily() {
   const { id } = useParams();
   const userData = getActivityData(id);
   let graphData = [];
   // Valeurs pour "Default User"
   let defaultValues = [
      {
         day: "2024-01-01",
         kilogram: 50,
         calories: 100,
      },
      {
         day: "2024-01-02",
         kilogram: 50,
         calories: 200,
      },
      {
         day: "2024-01-03",
         kilogram: 45,
         calories: 300,
      },
      {
         day: "2024-01-04",
         kilogram: 45,
         calories: 400,
      },
      {
         day: "2024-01-05",
         kilogram: 40,
         calories: 500,
      },
      {
         day: "2024-01-06",
         kilogram: 45,
         calories: 600,
      },
      {
         day: "2024-01-07",
         kilogram: 40,
         calories: 700,
      },
   ];
   // Si "Default User" // Si "User" avec ID connu
   if (id == undefined) {
      defaultValues.forEach((element, index) => {
         graphData.push({
            day: [index + 1],
            poids: element.kilogram,
            calories: element.calories,
         });
      });
   } else if (id) {
      const userSessions = userData.sessions;
      // Utilisation des Données-Utilisateur
      userSessions.forEach((element, index) => {
         graphData.push({
            // PUSH de chaque SESSION dans graphData[]
            day: [index + 1],
            poids: element.kilogram,
            calories: element.calories,
         });
      });
   }

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
   // CUSTOMIZED AXE X
   const CustomizedAxisTickX = ({ x, y, payload }) => {
      return (
         <g transform={`translate(${x},${y})`}>
            <text
               x={0}
               y={0}
               dy={25}
               fill="#9B9EAC"
               style={{ fontWeight: "600", fontSize: "14px" }}
            >
               {payload.value}
            </text>
         </g>
      );
   };
   // CUSTOMIZED AXE Y
   const CustomizedAxisTickY = ({ x, y, payload }) => {
      return (
         <g transform={`translate(${x},${y})`}>
            <text
               x={0}
               y={0}
               dy={5}
               dx={30}
               fill="#9B9EAC"
               style={{ fontWeight: "600", fontSize: "14px" }}
            >
               {payload.value}
            </text>
         </g>
      );
   };

   return (
      <div className="DailyWrapper">
         <div className="DailyTitle">Activité quotidienne</div>
         <ResponsiveContainer width="100%" height="100%">
            <BarChart
               data={graphData}
               // margin={{
               //    top: 0,
               //    right: 0,
               //    left: 0,
               //    bottom: 0,
               // }}
               margin={{
                  top: 30,
                  right: 10,
                  left: 50,
                  bottom: 5,
               }}
               barSize={10}
               barGap={8}
            >
               <Legend verticalAlign="top" content={RenderCustomizedLegend} />
               <CartesianGrid strokeDasharray="2" vertical={false} />
               <ReferenceLine x="0" />
               <XAxis
                  dataKey="day"
                  height={60}
                  width={"auto"}
                  tickLine={false}
                  axisLine={{ stroke: "#d1d2d6" }}
                  tick={CustomizedAxisTickX}
                  padding={{ left: -40, right: -40 }}
               />
               <YAxis
                  dataKey={"calories"}
                  tick={CustomizedAxisTickY}
                  type="number"
                  interval={1}
                  hide
               />
               <YAxis
                  dataKey={"poids"}
                  tick={CustomizedAxisTickY}
                  orientation="right"
                  type="number"
                  domain={["min", "auto"]}
                  interval={1}
                  axisLine={false}
                  tickLine={false}
                  width={90}
                  yAxisId="right"
               />

               <Tooltip
                  content={CustomTooltip}
                  cursor={{ fill: "#C4C4C480" }}
               />
               <Bar
                  // yAxisId="left"
                  color="#74798c"
                  name="Poids (kg)"
                  dataKey="poids"
                  fill="black"
                  radius={[4.5, 4.5, 0, 0]}
               />
               <Bar
                  // yAxisId="right"
                  color="#74798c"
                  name="Calories brûlées (kCal)"
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
