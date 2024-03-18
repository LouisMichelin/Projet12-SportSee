import "./Dashboard.scss";
import Welcome from "../Welcome/Welcome";
import Daily from "../Daily/Daily";

function Dashboard() {
   return (
      <div className="DashboardWrapper">
         <div></div>
         <Welcome />
         <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
               <Daily />
            </div>
         </div>
      </div>
   );
}

export default Dashboard;
