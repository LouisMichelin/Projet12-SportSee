import "./Score.scss";
import { getMainData } from "../../services/APIservices";
import React, { PureComponent } from "react";
import {
   RadialBarChart,
   RadialBar,
   Legend,
   ResponsiveContainer,
} from "recharts";

let userId = 12;
const data = [
   {
      name: `${12}% de votre objectif`,
      uv: 3.47,
      pv: 240,
      fill: "#8884d8",
   },
];
const style = {
   top: "50%",
   right: 0,
   transform: "translate(0, -50%)",
   lineHeight: "24px",
};

function Score() {
   return (
      <div className="ScoreWrapper">
         <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
               cx="50%"
               cy="50%"
               innerRadius="75%"
               // outerRadius="80%"
               barSize={50}
               data={data}
            >
               <RadialBar
                  // minAngle={225}
                  // label={{ position: "insideStart", fill: "#fff" }}
                  // background
                  // clockWise
                  dataKey="pv"
               />
               <Legend
                  // iconSize={100}
                  // layout="vertical"
                  verticalAlign="middle"
                  wrapperStyle={style}
               />
            </RadialBarChart>
         </ResponsiveContainer>
      </div>
   );
}

export default Score;
