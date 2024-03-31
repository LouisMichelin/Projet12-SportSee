// import { fs } from "fs";
const path = "./src/data/dashboard-master/app/data/data.json";
// import { writeFile } from "fs";
const fs = require("fs");
// const test = fs.readFileSync(path);
// console.log(JSON.parse(test));

// const config = { ip: "192.0.2.1", port: 3000 };

// try {
//    writeFile(path, JSON.stringify(config, null, 2), "utf8");
//    console.log("Data successfully saved to disk");
// } catch (error) {
//    console.log("An error has occurred ", error);
// }

// fetch(path).then((response) =>
//    response.json().then((json) => console.log(json))
// );
// console.log(path);

// let mainDataAPI = sessionStorage.getItem("mainData");
// console.log("maindataAPI", JSON.parse(mainDataAPI));

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

export function getMainDataMocked(elementID) {
   // Récupérer les données MAIN DATA depuis le fichier DATA.JSON
   // que j'aurais créé
}
export function getActivityDataMocked(elementID) {}
export function getAverageDataMocked(elementID) {}
export function getPerformanceDataMocked(elementID) {}

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
