import "./App.scss";
import Lateral from "../components/Lateral/Lateral";
import Dashboard from "../components/Dashboard/Dashboard";
import { useParams } from "react-router-dom";

function App() {
   const { id } = useParams();
   console.log("ID = OK : ", id);

   return (
      <div className="AppWrapper">
         <Lateral />
         <Dashboard />
      </div>
   );
}

export default App;
