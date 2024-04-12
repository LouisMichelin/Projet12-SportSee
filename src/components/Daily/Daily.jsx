import "./Daily.scss";
import {
   Tooltip,
   Legend,
   ResponsiveContainer,
   BarChart,
   Bar,
   // ReferenceLine,
   XAxis,
   YAxis,
   CartesianGrid,
} from "recharts";
import { getActivityData } from "../../services/APIservices";
import { useParams } from "react-router-dom";

function Daily() {
   // ID depuis userParams()
   const { id } = useParams();
   // Function API
   const userData = getActivityData(id);
   // Array des données affichées
   let graphData = [];
   // Valeurs pour "Default User"
   let defaultValues = [
      {
         day: "2024-01-01",
         kilogram: 90,
         calories: 100,
      },
      {
         day: "2024-01-02",
         kilogram: 80,
         calories: 200,
      },
      {
         day: "2024-01-03",
         kilogram: 70,
         calories: 300,
      },
      {
         day: "2024-01-04",
         kilogram: 60,
         calories: 400,
      },
      {
         day: "2024-01-05",
         kilogram: 55,
         calories: 500,
      },
      {
         day: "2024-01-06",
         kilogram: 50,
         calories: 600,
      },
      {
         day: "2024-01-07",
         kilogram: 45,
         calories: 700,
      },
   ];
   // Si "Default User" // Sinon "User" avec ID connu
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
      userSessions.forEach((element, index) => {
         graphData.push({
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
                  // interval={1}
                  style={{
                     fontWeight: "600",
                     fontSize: "14px",
                     fill: "#9B9EAC",
                  }}
                  dx={25}
                  domain={["auto", "auto"]}
                  tickCount={3}
               />
               {/*CALORIES*/}
               <YAxis
                  yAxisId="left"
                  orientation="left"
                  axisLine={false}
                  tickLine={false}
                  hide
               />
               <Tooltip
                  content={CustomTooltip}
                  cursor={{ fill: "#C4C4C480" }}
               />
               <Legend verticalAlign="top" content={RenderCustomizedLegend} />
               <Bar
                  yAxisId="right"
                  dataKey="poids"
                  fill="black"
                  radius={[4.5, 4.5, 0, 0]}
               />
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
