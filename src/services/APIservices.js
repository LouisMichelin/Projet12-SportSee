// FETCH() => Potentiellement utile pour les Data
//
// fetch(path, {
//    method: "POST",
//    body: JSON.stringify({
//       userId: 1,
//       title: "Fix my bugs",
//       completed: false,
//    }),
//    headers: {
//       "Content-type": "application/json; charset=UTF-8",
//    },
// })
//    .then((response) => response.json())
//    .then((json) => console.log(json));
// let mainDataAPI = sessionStorage.getItem("mainData");
// console.log("maindataAPI", JSON.parse(mainDataAPI));

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

export function getMainDataAPI(elementID) {
   fetch(`http://localhost:1337/user/${elementID}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
   })
      .then((response) => {
         if (response.ok) {
            return response.json();
         }
         throw response;
      })
      .then((data) => {
         // console.log(data);
         sessionStorage.setItem("mainData", JSON.stringify(data));
      })
      .catch((error) => {
         console.error("Error fetching : ", error);
      });
}

export function getActivityDataAPI(elementID) {
   fetch(`http://localhost:1337/user/${elementID}/activity`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
   })
      .then((res) => {
         if (res.ok) {
            return res.json();
         }
         throw res;
      })
      .then((data) => {
         // console.log(data);
         sessionStorage.setItem("activityData", JSON.stringify(data));
      })
      .catch((error) => {
         console.error("Error fetching : ", error);
      });
}

export function getAverageDataAPI(elementID) {
   fetch(`http://localhost:1337/user/${elementID}/average-sessions`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
   })
      .then((res) => {
         if (res.ok) {
            return res.json();
         }
         throw res;
      })
      .then((data) => {
         // console.log(data);
         sessionStorage.setItem("averageData", JSON.stringify(data));
      })
      .catch((error) => {
         console.error("Error fetching : ", error);
      });
}

export function getPerformanceDataAPI(elementID) {
   fetch(`http://localhost:1337/user/${elementID}/performance`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
   })
      .then((res) => {
         if (res.ok) {
            return res.json();
         }
         throw res;
      })
      .then((data) => {
         // console.log(data);
         sessionStorage.setItem("performanceData", JSON.stringify(data));
      })
      .catch((error) => {
         console.error("Error fetching : ", error);
      });
}

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

export function getMainDataMocked(elementID) {
   // Récupérer les données MAIN DATA depuis le fichier DATA.JSON
   // que j'aurais créé
}
export function getActivityDataMocked(elementID) {}
export function getAverageDataMocked(elementID) {}
export function getPerformanceDataMocked(elementID) {}

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

export function getMainData(elementID) {
   // CHECK VERIFICATION DU REGLAGE DE L'APP :
   // IF DATA MOCKED ? ALORS DATA API CALLED : DATA API
   // ET LE COMPONANT VA APPELER getMainData();
   // sessionStorage.setItem("profile", JSON.stringify(elementID));
   // sessionStorage.setItem("profile", elementID);

   // Si sessionStorage est vide, alors on appelle la fonction API getMainDataAPI()
   if (sessionStorage.getItem("mainData") == null) {
      getMainDataAPI(elementID);
   }
   // ELSE : on utilise les DATA du fichier JSON
}
export function getActivityData(elementID) {}
export function getAverageData(elementID) {}
export function getPerformanceData(elementID) {}
