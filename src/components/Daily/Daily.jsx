import React, { useState, useEffect } from "react";
import "./Daily.scss";
// import { Bar } from "react-chartjs-2";
import {
   // Chart as ChartJS,
   // CategoryScale,
   // LinearScale,
   // BarElement,
   // Title,
   Tooltip,
   Legend,
   ResponsiveContainer,
   BarChart,
   Bar,
   Rectangle,
   ReferenceLine,
   XAxis,
   YAxis,
   CartesianGrid,
} from "recharts";

function Daily({ userId }) {
   // ---------------------------------------------------------------
   const [data, setData] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   useEffect(() => {
      fetch(`http://localhost:1337/user/${userId}/activity`)
         .then((response) => {
            if (response.ok) {
               return response.json();
            }
            throw response;
         })
         .then((data) => {
            setData(data);
            // console.log(data);
         })
         .catch((error) => {
            console.error("Error fetching data : ", error);
            setError(error);
         })
         .finally(() => {
            setLoading(false);
         });
   }, [userId]);
   if (loading) return "Loading...";
   if (error) return "Error!";
   const userData = data.data;
   const userSessions = userData.sessions;
   // console.log(userSessions);
   // ---------------------------------------------------------------

   // ---------------------------------------------------------------
   // CE DATA LA ======> données fixes pour exemples
   // const data = [
   //    {
   //       day: 1,
   //       poids: 80,
   //       calories: 240,
   //       // amt: 75,
   //    },
   //    {
   //       day: 2,
   //       poids: 80,
   //       calories: 220,
   //       // amt: 75,
   //    },
   //    {
   //       day: 3,
   //       poids: 75,
   //       calories: 280,
   //       // amt: 75,
   //    },
   //    {
   //       day: 4,
   //       poids: 70,
   //       calories: 200,
   //       // amt: 75,
   //    },
   //    {
   //       day: 5,
   //       poids: 65,
   //       calories: 150,
   //       // amt: 75,
   //    },
   //    {
   //       day: 6,
   //       poids: 65,
   //       calories: 300,
   //       // amt: 75,
   //    },
   //    {
   //       day: 7,
   //       poids: 70,
   //       calories: 200,
   //       // amt: 75,
   //    },
   //    {
   //       day: 8,
   //       poids: 65,
   //       calories: 150,
   //       // amt: 75,
   //    },
   //    {
   //       day: 9,
   //       poids: 65,
   //       calories: 300,
   //       // amt: 75,
   //    },
   //    {
   //       day: 10,
   //       poids: 65,
   //       calories: 300,
   //       // amt: 75,
   //    },
   // ];
   const graphData = [];
   userSessions.forEach((element, index) => {
      graphData.push({
         day: index,
         "Poids (kg)": element.kilogram,
         "Calories brûlées (kCal)": element.calories,
      });
   });

   // console.log("graphdata = ", graphData);

   // function renderTooltip() {
   //    return (
   //       <div
   //          dataKey="Poids (kg)"
   //          data={graphData}
   //          style={{ backgroundColor: "red", color: "#ffffff" }}
   //       >
   //          <div>test</div>
   //          <div>{}</div>
   //       </div>
   //    );
   // }

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
                     contentStyle={{ backgroundColor: "red" }}
                     itemStyle={{ color: "#ffffff" }}
                     // content={renderTooltip()}
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
