import "./Dashboard.scss";
import Welcome from "../Welcome/Welcome";
// import Daily from "../Daily/Daily.jsx";
// import Sessions from "../Sessions/Sessions.jsx";
// import Performances from "../Performances/Performances.jsx";
// import Score from "../Score/Score.jsx";
import { useParams } from "react-router-dom";

function Dashboard() {
   const { id } = useParams();

   return (
      <div className="DashboardWrapper">
         <Welcome />
         <div className="DashboardSecondWrapper">
            <div style={{ display: "flex", flexDirection: "column" }}>
               {/* <Daily /> */}
               <div className="DashboardDetails">
                  {/* <Sessions /> */}
                  {/* <Performances /> */}
                  {/* <Score /> */}
               </div>
            </div>
            <div className="DashboardScientificValues">
               {/* <div>CECI SERA UN .MAP()</div> */}
               <div>1</div>
               <div>2</div>
               <div>3</div>
               <div>4</div>
            </div>
         </div>
      </div>
   );
}

export default Dashboard;
