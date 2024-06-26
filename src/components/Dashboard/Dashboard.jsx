import "./Dashboard.scss";
import Welcome from "../Welcome/Welcome";
import Daily from "../Daily/Daily.jsx";
import Sessions from "../Sessions/Sessions.jsx";
import Performances from "../Performances/Performances.jsx";
import Score from "../Score/Score.jsx";
import Scientifics from "../Scientifics/Scientifics.jsx";
import { useParams } from "react-router-dom";

function Dashboard() {
   const { id } = useParams(); // ID fetched avec useParams().

   return (
      <div className="DashboardWrapper">
         <Welcome useParamID={id} />
         <div className="DashboardSecondWrapper">
            <div className="DashboardGraphics">
               <Daily useParamID={id} />
               <div className="DashboardDetails">
                  <Sessions useParamID={id} />
                  <Performances useParamID={id} />
                  <Score useParamID={id} />
               </div>
            </div>
            <div className="DashboardScientificValues">
               <Scientifics
                  imageSrc={"src/assets/calories-icon.png"}
                  imageAlt={"Icone des calories"}
                  useParamID={id}
                  category={"calorieCount"}
               />
               <Scientifics
                  imageSrc={"src/assets/protein-icon.png"}
                  imageAlt={"Icone des protéines"}
                  useParamID={id}
                  category={"proteinCount"}
               />
               <Scientifics
                  imageSrc={"src/assets/carbs-icon.png"}
                  imageAlt={"Icone des glucides"}
                  useParamID={id}
                  category={"carbohydrateCount"}
               />
               <Scientifics
                  imageSrc={"src/assets/fat-icon.png"}
                  imageAlt={"Icone des graisses"}
                  useParamID={id}
                  category={"lipidCount"}
               />
            </div>
         </div>
      </div>
   );
}

export default Dashboard;
