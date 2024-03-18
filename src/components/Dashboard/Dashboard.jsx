import Welcome from "../Welcome/Welcome";
import "./Dashboard.scss";
import Daily from "../Daily/Daily";
// import functionGetApi from "../../service/functionGet";
// import { useState, useEffect } from "react";
import { getMainData } from "../../services/APIservices";

function Dashboard() {
   // getMainData(12);
   return (
      <div className="DashboardWrapper">
         <div></div>
         <Welcome />
         <div style={{ display: "flex", flexDirection: "row" }}>
            <div>{/* <Daily userId={12} /> */}</div>
         </div>
      </div>
   );
}

export default Dashboard;
