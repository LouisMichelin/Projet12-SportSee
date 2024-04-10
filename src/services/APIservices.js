// import { USER_MAIN_DATA } from "../../P9-front-end-dashboard/app/data";
// import { USER_MAIN_DATA } from "../data/data";
// ==> The requested module '/src/data/data.js?t=1712579940312' does not provide an export named 'USER_MAIN_DATA' (at APIservices.js:2:10)
// ---------------------------------------------------------------------------------------------------------------------------------------
// SEULE METHODE POUR EVITER LES ERREURS D'IMPORT :
const USER_MAIN_DATA = [
   {
      id: 12,
      userInfos: {
         firstName: "Karl",
         lastName: "Dovineau",
         age: 31,
      },
      todayScore: 0.12,
      keyData: {
         calorieCount: 1930,
         proteinCount: 155,
         carbohydrateCount: 290,
         lipidCount: 50,
      },
   },
   {
      id: 18,
      userInfos: {
         firstName: "Cecilia",
         lastName: "Ratorez",
         age: 34,
      },
      todayScore: 0.3,
      keyData: {
         calorieCount: 2500,
         proteinCount: 90,
         carbohydrateCount: 150,
         lipidCount: 120,
      },
   },
];
const USER_ACTIVITY = [
   {
      userId: 12,
      sessions: [
         {
            day: "2020-07-01",
            kilogram: 80,
            calories: 240,
         },
         {
            day: "2020-07-02",
            kilogram: 80,
            calories: 220,
         },
         {
            day: "2020-07-03",
            kilogram: 81,
            calories: 280,
         },
         {
            day: "2020-07-04",
            kilogram: 81,
            calories: 290,
         },
         {
            day: "2020-07-05",
            kilogram: 80,
            calories: 160,
         },
         {
            day: "2020-07-06",
            kilogram: 78,
            calories: 162,
         },
         {
            day: "2020-07-07",
            kilogram: 76,
            calories: 390,
         },
      ],
   },
   {
      userId: 18,
      sessions: [
         {
            day: "2020-07-01",
            kilogram: 70,
            calories: 240,
         },
         {
            day: "2020-07-02",
            kilogram: 69,
            calories: 220,
         },
         {
            day: "2020-07-03",
            kilogram: 70,
            calories: 280,
         },
         {
            day: "2020-07-04",
            kilogram: 70,
            calories: 500,
         },
         {
            day: "2020-07-05",
            kilogram: 69,
            calories: 160,
         },
         {
            day: "2020-07-06",
            kilogram: 69,
            calories: 162,
         },
         {
            day: "2020-07-07",
            kilogram: 69,
            calories: 390,
         },
      ],
   },
];
const USER_AVERAGE_SESSIONS = [
   {
      userId: 12,
      sessions: [
         {
            day: 1,
            sessionLength: 30,
         },
         {
            day: 2,
            sessionLength: 23,
         },
         {
            day: 3,
            sessionLength: 45,
         },
         {
            day: 4,
            sessionLength: 50,
         },
         {
            day: 5,
            sessionLength: 0,
         },
         {
            day: 6,
            sessionLength: 0,
         },
         {
            day: 7,
            sessionLength: 60,
         },
      ],
   },
   {
      userId: 18,
      sessions: [
         {
            day: 1,
            sessionLength: 30,
         },
         {
            day: 2,
            sessionLength: 40,
         },
         {
            day: 3,
            sessionLength: 50,
         },
         {
            day: 4,
            sessionLength: 30,
         },
         {
            day: 5,
            sessionLength: 30,
         },
         {
            day: 6,
            sessionLength: 50,
         },
         {
            day: 7,
            sessionLength: 50,
         },
      ],
   },
];
const USER_PERFORMANCE = [
   {
      userId: 12,
      kind: {
         1: "cardio",
         2: "energy",
         3: "endurance",
         4: "strength",
         5: "speed",
         6: "intensity",
      },
      data: [
         {
            value: 80,
            kind: 1,
         },
         {
            value: 120,
            kind: 2,
         },
         {
            value: 140,
            kind: 3,
         },
         {
            value: 50,
            kind: 4,
         },
         {
            value: 200,
            kind: 5,
         },
         {
            value: 90,
            kind: 6,
         },
      ],
   },
   {
      userId: 18,
      kind: {
         1: "cardio",
         2: "energy",
         3: "endurance",
         4: "strength",
         5: "speed",
         6: "intensity",
      },
      data: [
         {
            value: 200,
            kind: 1,
         },
         {
            value: 240,
            kind: 2,
         },
         {
            value: 80,
            kind: 3,
         },
         {
            value: 80,
            kind: 4,
         },
         {
            value: 220,
            kind: 5,
         },
         {
            value: 110,
            kind: 6,
         },
      ],
   },
];

// ---------------------------------------------------------------------------------------------------------------------------------------

const isDataMocked = true;

function getMainDataAPI(userID) {
   fetch(`http://localhost:1337/user/${userID}`, {
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
         // RIEN NE MARCHE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
         // ---> Les console.log() retournent TOUTES le firstName attendu
         // ---> MAIS c'est récupéré en UNDEFINED depuis <Welcome /> !!!
         // ........
         // QUE FAIRE ?????????????????????????????
         console.log("on fait appel à l'API fetch");
         let dataVar = data.data;
         console.log("dataVar: ", dataVar.userInfos.firstName);
         let firstNameVar = dataVar.userInfos.firstName;
         console.log(firstNameVar);
         return firstNameVar;
         // OU ALORS
         // On en fait un localStorage() ????????????????????????????????????
      })
      .catch((error) => {
         console.error("Error fetching : ", error);
      });
}
function getActivityDataAPI(userID) {
   fetch(`http://localhost:1337/user/${userID}/activity`, {
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
         sessionStorage.setItem("userActivityData", JSON.stringify(data));
      })
      .catch((error) => {
         console.error("Error fetching : ", error);
      });
}
function getAverageDataAPI(userID) {
   fetch(`http://localhost:1337/user/${userID}/average-sessions`, {
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
         sessionStorage.setItem("userAverageData", JSON.stringify(data));
      })
      .catch((error) => {
         console.error("Error fetching : ", error);
      });
}
function getPerformanceDataAPI(userID) {
   fetch(`http://localhost:1337/user/${userID}/performance`, {
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
         sessionStorage.setItem("userPerformanceData", JSON.stringify(data));
      })
      .catch((error) => {
         console.error("Error fetching : ", error);
      });
}

//////////////////////////////////////////////////////////
//                     MOCKED FUNCTIONS                 //
//////////////////////////////////////////////////////////
function getMainDataMocked(userID) {
   return USER_MAIN_DATA.find((element) => element.id == userID);
}
function getActivityDataMocked(userID) {
   return USER_ACTIVITY.find((element) => element.userId == userID);
}
function getAverageDataMocked(userID) {
   return USER_AVERAGE_SESSIONS.find((element) => {
      element.id == userID;
   });
}
function getPerformanceDataMocked(userID) {
   return USER_PERFORMANCE.find((element) => {
      element.id == userID;
   });
}

//////////////////////////////////////////////////////////
//                     MAIN FUNCTIONS                   //
//////////////////////////////////////////////////////////
export function getMainData(userID) {
   if (isDataMocked) {
      console.log("getMainData() version MOCKED");
      return getMainDataMocked(userID);
   } else {
      console.log("getMainData() version API FETCH");
      return getMainDataAPI(userID);
   }
}
export function getActivityData(userID) {
   if (isDataMocked) {
      console.log("getActivityDataMocked() version MOCKED");
      return getActivityDataMocked(userID);
   } else {
      console.log("getActivityDataAPI() version API FETCH");
      return getActivityDataAPI(userID);
   }
}
export function getAverageData(userID) {}
export function getPerformanceData(userID) {}
