/**
 * -------------------------------------------
 * PROBLEME RENCONTRE DES LE DEBUT DU PROJET :
 *  import { USER_MAIN_DATA } from "../../P9-front-end-dashboard/app/data";
 *  import { USER_MAIN_DATA } from "../data/data";
 *  >>> "The requested module '/src/data/data.js?t=1712579940312' does not provide an export named 'USER_MAIN_DATA' (at APIservices.js:2:10)"
 * -------------------------------------------------------------------
 * Dans mon cas de figure, les IMPORT des DATAS ne fonctionnaient PAS DU TOUT.
 * Après de multiples vérifications auprès de ma mentore + de nombreuses heures
 * de recherche sur forums, aucune solution n'a pu être trouvée à ce jour.
 * En vue du temps passé à vouloir faire fonctionner les IMPORT,
 * ils ont été simplifiés en les copiant simplement ci-dessous :
 * -------------------------------------------------------------
 */
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
      score: 0.3,
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

// DATA MOCKED ?
const isDataMocked = false;

/**
 * ------------------------------------
 * FONCTIONS DATA : VERSION API-FETCH :
 * ------------------------------------
 */
async function getMainDataAPI(userID) {
   // await fetch(`http://localhost:1337/user/${userID}`, {
   //    method: "GET",
   //    headers: {
   //       "Content-Type": "application/json",
   //    },
   // })
   //    .then((response) => {
   //       if (response.ok) {
   //          return response.json();
   //       }
   //       throw response;
   //    })
   //    .then((data) => {
   //       console.log("DATA APISERVICES: ", data.data);
   //       return data.data;
   //    })
   //    .catch((error) => {
   //       console.error("Error fetching : ", error);
   //    });
   /////////////////////////////////////////////////////////////////////////
   const response = await fetch(`http://localhost:1337/user/${userID}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
   });
   const json = await response.json();
   return json.data;
}
async function getActivityDataAPI(userID) {
   const response = await fetch(
      `http://localhost:1337/user/${userID}/activity`,
      {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
         },
      }
   );
   // console.log(response);
   const json = await response.json();
   return json.data;
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
         // sessionStorage.setItem("userAverageData", JSON.stringify(data));
         // MÊME PROBLEME QUE L.269
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
         // sessionStorage.setItem("userPerformanceData", JSON.stringify(data));
         // MÊME PROBLEME QUE L.269
      })
      .catch((error) => {
         console.error("Error fetching : ", error);
      });
}
/**
 * -----------------------------------
 * FONCTIONS DATA : VERSION "MOCKED" :
 * -----------------------------------
 */
function getMainDataMocked(userID) {
   return USER_MAIN_DATA.find((element) => element.id == userID);
}
function getActivityDataMocked(userID) {
   return USER_ACTIVITY.find((element) => element.userId == userID);
}
function getAverageDataMocked(userID) {
   return USER_AVERAGE_SESSIONS.find((element) => element.userId == userID);
}
function getPerformanceDataMocked(userID) {
   return USER_PERFORMANCE.find((element) => element.userId == userID);
}
/**
 * ------------------------------------------------------
 * FONCTIONS DATA : VERSION MAIN (selon "isDataMocked") :
 * ------------------------------------------------------
 */
export function getMainData(userID) {
   if (isDataMocked) {
      // console.log("-----DATA MOCKED-----");
      return getMainDataMocked(userID);
   } else {
      // console.log("-----API FETCHED DATA-----");
      return getMainDataAPI(userID);
   }
}
export function getActivityData(userID) {
   if (isDataMocked) {
      console.log("-----DATA MOCKED-----");
      return getActivityDataMocked(userID);
   } else {
      console.log("-----API FETCHED DATA-----");
      // console.log(USER_ACTIVITY[0]);
      return getActivityDataAPI(userID);
   }
}
export function getAverageData(userID) {
   if (isDataMocked) {
      return getAverageDataMocked(userID);
   } else {
      return getAverageDataAPI(userID);
   }
}
export function getPerformanceData(userID) {
   if (isDataMocked) {
      return getPerformanceDataMocked(userID);
   } else {
      return getPerformanceDataAPI(userID);
   }
}
