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
            length: element.sessionLength,
         });
      });
   } else if (id) {
      const userSessions = userData.sessions;

      // Utilisation des Données-Utilisateur
      userSessions.forEach((element, index) => {
         graphData.push({
            day: weeklyDays[index],
            length: element.sessionLength,
         });
      });
      console.log(graphData);
   }

   // // CUSTOMIZED AXE ABSCISSES
   const CustomizedAxisTickX = ({ x, y, payload }) => {
      return (
         <g transform={`translate(${x},${y})`}>
            <text
               x={-5}
               y={0}
               dy={25}
               // dx={10}
               fill="#ffffff"
               style={{
                  fontSize: "14px",
                  opacity: "0.66",
               }}
            >
               {payload.value}
            </text>
         </g>
      );
   };

   return (
      <div
         className="SessionsWrapper"
         style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
         }}
      >
         <div
            style={{
               margin: "10px 0px 0px 10px",
               position: "absolute",
               color: "#FFFFFF",
               fontWeight: "600",
               fontSize: "14px",
            }}
            className="SessionsTitle"
         >
            Durée moyenne des sessions
         </div>
         <ResponsiveContainer width="100%" height={240}>
            <LineChart
               // width={260}
               // height={240}
               data={graphData}
               margin={{
                  top: 5,
                  right: 15,
                  left: 15,
                  bottom: 5,
               }}
            >
               {/* <CartesianGrid strokeDasharray="3 3" /> */}
               <XAxis
                  dataKey="day"
                  color="#ffffff"
                  tick={CustomizedAxisTickX}
                  tickLine={false}
                  axisLine={false}
               />
               {/*<YAxis dataKey="length" /> */}
               <Tooltip />

               <Line
                  type="monotone"
                  dataKey="length"
                  stroke="#ffffff"
                  activeDot={{ r: 8 }}
                  style={{
                     // fontSize: "14px",
                     opacity: "0.66",
                  }}
                  dot={null}
               />
            </LineChart>
         </ResponsiveContainer>
      </div>
   );
}

export default Sessions;
