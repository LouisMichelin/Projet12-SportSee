import "./Button.scss";

function Button({ imageBtn }) {
   return (
      <div className="ButtonWrapper">
         <img src={imageBtn} alt="Logo associé au bouton latéral" />
      </div>
   );
}

export default Button;
