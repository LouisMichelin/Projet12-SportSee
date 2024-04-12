import "./Sessions.scss";
import {
   LineChart,
   Line,
   XAxis,
   YAxis,
   CartesianGrid,
   Tooltip,
   Legend,
   ResponsiveContainer,
} from "recharts";
import { getAverageData } from "../../services/APIservices";
import { useParams } from "react-router-dom";

function Sessions() {
   // ID depuis userParams()
   const { id } = useParams();
   // Function API
   const userData = getAverageData(id);
   // Array des données affichées
   let graphData = [];
   // Valeurs pour "Default User"
   let defaultValues = [
      {
         day: 1,
         sessionLength: 10,
      },
      {
         day: 2,
         sessionLength: 20,
      },
      {
         day: 3,
         sessionLength: 30,
      },
      {
         day: 4,
         sessionLength: 40,
      },
      {
         day: 5,
         sessionLength: 50,
      },
      {
         day: 6,
         sessionLength: 60,
      },
      {
         day: 7,
         sessionLength: 70,
      },
   ];
   // Data Jours de la semaine
   const weeklyDays = ["L", "M", "M", "J", "V", "S", "D"];
   // Si "Default User" // Sinon "User" avec ID connu
   if (id == undefined) {
      defaultValues.forEach((element, index) => {
         graphData.push({
            day: weeklyDays[index],
            duree: element.sessionLength,
         });
      });
   } else if (id) {
      const userSessions = userData.sessions;
      userSessions.forEach((element, index) => {
         graphData.push({
            day: weeklyDays[index],
            duree: element.sessionLength,
         });
      });
   }

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
