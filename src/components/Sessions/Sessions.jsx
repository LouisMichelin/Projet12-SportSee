import "./Sessions.scss";
import {
   LineChart,
   Line,
   XAxis,
   YAxis,
   Tooltip,
   ResponsiveContainer,
} from "recharts";
import { getAverageData } from "../../services/APIservices";
import { useEffect, useState } from "react";

function Sessions({ useParamID }) {
   const [userDataFetched, setUserDataFetched] = useState([]);
   const [canRunFunction, setCanRunFunction] = useState(true);
   const weeklyDays = ["L", "M", "M", "J", "V", "S", "D"];

   useEffect(() => {
      // Function Async fetchData() récupère les données :
      async function fetchData() {
         const reponse = await getAverageData(useParamID);
         // Reset du useState() :
         setUserDataFetched([]);
         // Setup de l'Array Customized pour le Recharts :
         for (let i = 0; i < reponse.sessions.length; i++) {
            setUserDataFetched((userDataFetched) => [
               ...userDataFetched,
               {
                  day: weeklyDays[i],
                  duree: reponse.sessions[i].sessionLength,
               },
            ]);
         }
      }
      // Break Infinite Loop :
      if (canRunFunction) {
         setCanRunFunction(!canRunFunction);
         fetchData();
      }
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
               data={userDataFetched}
               margin={{
                  top: 20,
                  bottom: 20,
               }}
            >
               {/*OPACITY FADED SETTING */}
               <defs>
                  <linearGradient id="colorUv">
                     <stop offset="5%" stopColor="#ffffff" stopOpacity={0.45} />
                     <stop offset="50%" stopColor="#ffffff" stopOpacity={0.6} />
                     <stop
                        offset="100%"
                        stopColor="#ffffff"
                        stopOpacity={0.9}
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
                     fontSize: "12px",
                     opacity: "0.66",
                     fill: "#ffffff",
                  }}
               />
               <YAxis domain={["dataMin - 1", "dataMax + 1"]} hide />
               <Tooltip content={CustomTooltip} cursor={false} />
               <Line
                  type="monotone"
                  dataKey="duree"
                  stroke="url(#colorUv)"
                  strokeOpacity={1} // OPACITY de la COURBE
                  strokeWidth={2}
                  activeDot={{ r: 4, fill: "white" }}
                  dot={null}
               />
            </LineChart>
         </ResponsiveContainer>
      </div>
   );
}

export default Sessions;
