import "./Sessions.scss";
import { getAverageData } from "../../services/APIservices";
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

let userId = 12;

function Sessions() {
   // Si la sessionStorage est null alors on appelle la fonction API getAverageData()
   if (sessionStorage.getItem("averageData") == null) {
      getAverageData(userId);
   }
   const averageData = JSON.parse(sessionStorage.getItem("averageData"));
   if (averageData.data.id != userId) {
      getAverageData(userId);
   }
   // Utilisation des Data "fetched"
   const sessionsData = averageData.data.sessions;
   const sessionsArray = [];
   const weeklyDays = ["L", "M", "M", "J", "V", "S", "D"];
   sessionsData.forEach((element, index) => {
      sessionsArray.push({
         // PUSH de chaque SESSION dans sessionsArray[]
         day: weeklyDays[index],
         length: element.sessionLength,
      });
   });
   // -------------------------------------------------------------------------------
   const CustomizedAxisTickX = ({ x, y, payload }) => {
      return (
         <g transform={`translate(${x},${y})`}>
            <text
               x={0}
               y={0}
               dy={25}
               fill="#ffffff"
               style={{ fontSize: "14px" }}
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
               data={sessionsArray}
               // margin={{
               //    top: 5,
               //    right: 10,
               //    left: 10,
               //    bottom: 5,
               // }}
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
               />
            </LineChart>
         </ResponsiveContainer>
      </div>
   );
}

export default Sessions;
