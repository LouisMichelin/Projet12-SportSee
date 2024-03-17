import "./Lateral.scss";
import Button from "../Button/Button";
import Meditation from "../../assets/meditation.png";
import Musculation from "../../assets/musculation.png";
import Natation from "../../assets/natation.png";
import Velo from "../../assets/velo.png";

function Lateral() {
   return (
      <div className="LateralWrapper">
         <div className="LateralButtons">
            <Button imageBtn={Meditation} />
            <Button imageBtn={Natation} />
            <Button imageBtn={Velo} />
            <Button imageBtn={Musculation} />
         </div>
         <div className="LateralCopyright">Copyright, SportSee 2020</div>
      </div>
   );
}

export default Lateral;
