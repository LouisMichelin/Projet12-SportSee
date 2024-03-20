// import axios from "axios";

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
         // console.log(data);
         sessionStorage.setItem("mainData", JSON.stringify(data));
      })
      .catch((error) => {
         console.error("Error fetching : ", error);
      });
}

export function getActivityData(elementID) {
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

export function getAverageData(elementID) {
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
         let averageData = JSON.stringify(data);
         sessionStorage.setItem("averageData", averageData);
      })
      .catch((error) => {
         console.error("Error fetching : ", error);
      });
}

export function getPerformanceData(elementID) {
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
         let performanceData = JSON.stringify(data);
         sessionStorage.setItem("performanceData", performanceData);
      })
      .catch((error) => {
         console.error("Error fetching : ", error);
      });
}
