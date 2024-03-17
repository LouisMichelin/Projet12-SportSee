import Welcome from "../Welcome/Welcome";
import "./Dashboard.scss";
import Daily from "../Daily/Daily";
// import functionGetApi from "../../service/functionGet";
// import { useState, useEffect } from "react";

function Dashboard() {
   return (
      <div className="DashboardWrapper">
         <div></div>
         <Welcome userId={12} />
         <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
               <div>
                  <Daily userId={12} />
               </div>

               {/* <div
                  style={{
                     display: "flex",
                     flexDirection: "row",
                     width: "835px",
                     justifyContent: "space-between",
                  }}
               >
                  <div
                     style={{
                        width: "260px",
                        height: "260px",
                        backgroundColor: "blue",
                     }}
                  ></div>
                  <div
                     style={{
                        width: "260px",
                        height: "260px",
                        backgroundColor: "green",
                     }}
                  ></div>
                  <div
                     style={{
                        width: "260px",
                        height: "260px",
                        backgroundColor: "yellow",
                     }}
                  ></div>
               </div> */}
            </div>
            {/* <div
               style={{
                  backgroundColor: "cyan",
                  width: "260px",
                  marginLeft: "30px",
               }}
            ></div> */}
         </div>
      </div>
   );
}

export default Dashboard;
