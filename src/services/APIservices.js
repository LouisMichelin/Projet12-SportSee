import axios from "axios";

export function getMainData(elementID) {
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
         // const firstName = data.data.userInfos.firstName;
         // const lastName = data.data.userInfos.lastName;
         // const age = data.data.userInfos.age;
         // const todayScore = data.data.todayScore;
         // const calorieCount = data.data.keyData.calorieCount;
         // const proteinCount = data.data.keyData.proteinCount;
         // const carbohydrateCount = data.data.keyData.carbohydrateCount;
         // const lipidCount = data.data.keyData.lipidCount;

         // document.getElementById("WelcomeName").textContent = firstName;
         let mytest = JSON.stringify(data);
         localStorage.setItem("userData", mytest);
      })
      .catch((error) => {
         console.error("Error fetching : ", error);
      });
}
// getMainData(12);

function getActivityData(elementID) {
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
         console.log(data);
      })
      .catch((error) => {
         console.error("Error fetching : ", error);
      });
}

function getAverageData(elementID) {
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
         console.log(data);
      })
      .catch((error) => {
         console.error("Error fetching : ", error);
      });
}

function getPerformanceData(elementID) {
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
         console.log(data);
      })
      .catch((error) => {
         console.error("Error fetching : ", error);
      });
}

// export { getMainData, getActivityData, getAverageData, getPerformanceData };
