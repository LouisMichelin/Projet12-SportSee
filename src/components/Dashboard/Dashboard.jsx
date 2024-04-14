import "./Dashboard.scss";
import Welcome from "../Welcome/Welcome";
// import Daily from "../Daily/Daily.jsx";
// import Sessions from "../Sessions/Sessions.jsx";
// import Performances from "../Performances/Performances.jsx";
// import Score from "../Score/Score.jsx";
// import Scientifics from "../Scientifics/Scientifics.jsx";
// import { USER_MAIN_DATA } from "../../../P9-front-end-dashboard/app/data.js";
import { useParams } from "react-router-dom";

function Dashboard() {
   // ID depuis userParams()
   const { id } = useParams();

   return (
      <div className="DashboardWrapper">
         <Welcome useParamID={id} />
         <div className="DashboardSecondWrapper">
            <div style={{ display: "flex", flexDirection: "column" }}>
               <Daily useParamID={id} />
               <div className="DashboardDetails">
                  {/* <Sessions /> */}
                  {/* <Performances /> */}
                  {/* <Score /> */}
               </div>
            </div>
            <div className="DashboardScientificValues">
               1337
               {/* <Scientifics
                  imageSrc={"src/assets/calories-icon.png"}
                  imageAlt={"Icone des calories"}
                  category={"calorieCount"}
               />
               <Scientifics
                  imageSrc={"src/assets/protein-icon.png"}
                  imageAlt={"Icone des protéines"}
               />
               <Scientifics
                  imageSrc={"src/assets/carbs-icon.png"}
                  imageAlt={"Icone des glucides"}
               />
               <Scientifics
                  imageSrc={"src/assets/fat-icon.png"}
                  imageAlt={"Icone des graisses"}
               /> */}
            </div>
         </div>
      </div>
   );
}

export default Dashboard;
