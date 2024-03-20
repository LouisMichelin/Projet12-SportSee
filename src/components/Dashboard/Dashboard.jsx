import "./Dashboard.scss";
import Welcome from "../Welcome/Welcome";
import Daily from "../Daily/Daily";

function Dashboard() {
   return (
      <div className="DashboardWrapper">
         <Welcome />
         <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
               <Daily />
               <div style={{ display: "flex", flexDirection: "row" }}>
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
               </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
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
