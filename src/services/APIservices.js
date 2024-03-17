export default function functionGetApi(elementID) {
   fetch(`http://localhost:1337/user/${elementID}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      // body: "",
   })
      .then((res) => {
         if (res.ok) {
            return res.json();
         }
         throw res;
      })
      .then((data) => {
         console.log(data);
      })
      .catch((error) => {
         console.error("Error fetching : ", error);
      });
}

// TOUTES LES AUTRES FUNCTIONS EXPORT :
// UNE POUR :
// - http://localhost:3000/user/${userId}` -
// - `http://localhost:3000/user/${userId}/activity`
// - `http://localhost:3000/user/${userId}/average-sessions`
// - `http://localhost:3000/user/${userId}/performance`
