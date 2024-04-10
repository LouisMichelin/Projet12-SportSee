import "./App.scss";
import Lateral from "../components/Lateral/Lateral";
import Dashboard from "../components/Dashboard/Dashboard";

function App() {
   return (
      <div className="AppWrapper">
         <Lateral />
         <Dashboard />
      </div>
   );
}

export default App;
