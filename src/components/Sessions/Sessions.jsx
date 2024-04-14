import "./Sessions.scss";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { getAverageData } from "../../services/APIservices";

function Sessions({ useParamID }) {
   const userData = getAverageData(useParamID);

   // Array des données affichées
   // let graphData = [];

   // Data Jours de la semaine
   // const weeklyDays = ["L", "M", "M", "J", "V", "S", "D"];

   const userSessions = userData.sessions;
   userSessions.forEach((element, index) => {
      graphData.push({
         day: weeklyDays[index],
         duree: element.sessionLength,
      });
   });

   // CUSTOMIZED TOOLTIP
   const CustomTooltip = ({ active, payload }) => {
      if (active && payload && payload.length) {
         return (
            <div
               style={{
                  backgroundColor: "white",
                  width: "45px",
                  height: "25px",
                  fontSize: "8px",
                  fontWeight: "600",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
               }}
            >
               <p className="label">{`${payload[0].value} min`}</p>
            </div>
         );
      }
      return null;
   };

   return (
      <div className="SessionsWrapper">
         <div className="SessionsTitle">Durée moyenne des sessions</div>
         <ResponsiveContainer width="100%" height="100%">
            <LineChart
               data={graphData}
               margin={{
                  top: 20,
                  // right: 20,
                  // left: 20,
                  bottom: 20,
               }}
            >
               {/*OPACITY FADED SETTING */}
               <defs>
                  <linearGradient id="colorUv">
                     <stop offset="5%" stopColor="#ffffff" stopOpacity={0.5} />
                     <stop
                        offset="50%"
                        stopColor="#ffffff"
                        stopOpacity={0.75}
                     />
                     <stop
                        offset="100%"
                        stopColor="#ffffff"
                        stopOpacity={0.8}
                     />
                  </linearGradient>
               </defs>
               {/*LINE CHART SETTINGS*/}
               <XAxis
                  dataKey="day"
                  color="#ffffff"
                  tickLine={false}
                  axisLine={false}
                  dy={10}
                  padding={{ left: 15, right: 15 }}
                  style={{
                     fontSize: "14px",
                     opacity: "0.66",
                     fill: "#ffffff",
                  }}
               />
               <Tooltip content={CustomTooltip} />
               <Line
                  type="monotone"
                  dataKey="duree"
                  stroke="url(#colorUv)"
                  strokeOpacity={1} // OPACITY de la COURBE
                  strokeWidth={2}
                  activeDot={{ r: 4 }}
                  dot={null}
               />
            </LineChart>
         </ResponsiveContainer>
      </div>
   );
}

export default Sessions;
