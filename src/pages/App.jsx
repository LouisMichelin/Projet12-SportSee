import "./App.scss";
import Lateral from "../components/Lateral/Lateral";
import Dashboard from "../components/Dashboard/Dashboard";
import { useParams } from "react-router-dom";

function App() {
   const { id } = 12;

   // const { id } = useParams();

   if (!id) {
      console.log("Eeeeh oui c'est comme ça, undefined");
   }
   console.log(id);
   return (
      <div className="AppWrapper">
         <Lateral />
         <Dashboard />
      </div>
   );
}

export default App;
