////////////////////////////////////////
// SI BOUCLE INFINIE APRES EDIT DE JSON,
// AJOUTER CE CODE AU "package.json" :
// "nodemonConfig": {
//    "ext": "js",
//    "ignore": [
//       "*.test.ts",
//       "db/*"
//    ],
//    "delay": "2"
// }
///////////////////////////////////////
// CODE INITIAL DU SERVER:
///////////////////////////////////////
const express = require("express");
const cors = require("cors");
const router = require("./routes");
const fs = require("fs");

const app = express();
app.use(cors());
const port = 1337;
app.use(router);
app.listen(port, () => console.log(`Magic happens on port ${port}`));
////////////////////////////////////////////////////////////////////////////////////////
// Priviliégier le Path depuis le disque (E:) ...                                     //
// E:/.OPENCLASSROOMS/PROJET 12/sportsee/src/data/dashboard-master/app/data/data.json //
// E:/.OPENCLASSROOMS/PROJET 12/sportsee/src/data/dashboard-master/app/index.js       //
////////////////////////////////////////////////////////////////////////////////////////
// 1: CHEMIN DU FICHIER .JSON
const pathJSON =
   "E:/.OPENCLASSROOMS/PROJET 12/sportsee/src/data/dashboard-master/app/data/data.json";
// 2: IMPORT DES DATAS DEPUIS "./DATA.JS"
const {
   USER_MAIN_DATA,
   USER_ACTIVITY,
   USER_AVERAGE_SESSIONS,
   USER_PERFORMANCE,
} = require("./data");
////////////////////////////////////////////////////////////////////////////////////////
// -------------------------- LECTURE DU FICHIER .JSON ---------------------------------
// fs.readFile(pathJSON, "utf8", (err, data) => {
//    if (err) {
//       console.log(`Error reading file from disk: ${err}`);
//    } else {
//       const databases = JSON.parse(data); // parse JSON string to JSON object
//       console.log("Actual content = ", databases);
//    }
// });
// -------------------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////
// 4: ECRITURE DU FICHIER .JSON (OK)
const content = `"Salut beauté 123"`;
const content2 = `"Yo les Noobs ! :-)"`;
const { writeFile } = require("fs/promises"); // NODE: WriteFile() to edit .JSON
// Function pour éditer le fichier .JSON (flag "w" => overwrite, "a+" => add content)
async function writeTowardsFile(fileName, data) {
   try {
      await writeFile(fileName, data, { flag: "w" });
      console.log(`Contenu du JSON "${fileName}" a bien été édité.`);
   } catch (error) {
      console.error(`ERROR Trying to edit JSON: ${error.message}`);
   }
}
// MIXED_USER_DATAS en 1 constante :
// const mixedUserData = [
//    USER_MAIN_DATA,
//    USER_ACTIVITY,
//    USER_AVERAGE_SESSIONS,
//    USER_PERFORMANCE,
// ];
const mixedUserData = [
   { USER_MAIN_DATA: USER_MAIN_DATA },
   { USER_ACTIVITY: USER_ACTIVITY },
   { USER_AVERAGE_SESSIONS: USER_AVERAGE_SESSIONS },
   { USER_PERFORMANCE: USER_PERFORMANCE },
];
// Ecriture des MIXED_USER_DATAS dans le fichier .JSON
writeTowardsFile(pathJSON, JSON.stringify(mixedUserData, null, 2));
// console.log(USER_MAIN_DATA);
/*
 *if (
 *   (USER_MAIN_DATA[0].id &&
 *      USER_ACTIVITY[0].userId &&
 *      USER_AVERAGE_SESSIONS[0].userId &&
 *      USER_PERFORMANCE[0].userId) == 12
 *) {
 *   console.log("-------------------------------");
 *   console.log("L'userID du client est bien 12");
 *   console.log("-------------------------------");
 *   // appendToFile(pathJSON, JSON.stringify(USER_MAIN_DATA, null, 2));
 *   // appendToFile(pathJSON, JSON.stringify(USER_ACTIVITY, null, 2));
 *} else {
 *   console.log("-------------------------------");
 *   console.log("         ID incorrect          ");
 *   console.log("-------------------------------");
 *}
 *
 *console.log("                               ");
 *console.log("            END                ");
 *console.log("_______________________________");
 */
