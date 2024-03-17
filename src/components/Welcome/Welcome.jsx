import React, { useState, useEffect } from "react";
import "./Welcome.scss";

function Welcome({ userId }) {
   const [data, setData] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      fetch(`http://localhost:1337/user/${userId}`)
         .then((response) => {
            if (response.ok) {
               return response.json();
            }
            throw response;
         })
         .then((data) => {
            setData(data);
         })
         .catch((error) => {
            console.error("Error fetching data : ", error);
            setError(error);
         })
         .finally(() => {
            setLoading(false);
         });
   }, [userId]);

   if (loading) return "Loading...";
   if (error) return "Error!";

   const userData = data.data;
   const userFirstname = userData.userInfos.firstName;

   let IMPORTAGE = getprenomAPI();

   return (
      <div className="WelcomeWrapper">
         <div className="WelcomeMessage">
            Bonjour <span style={{ color: "#FF0101" }}>{userFirstname}</span>
         </div>
         <div className="WelcomeMessageCongrats">
            Félicitation ! Vous avez explosé vos objectifs hier &#128079;
         </div>
      </div>
   );
}

export default Welcome;
