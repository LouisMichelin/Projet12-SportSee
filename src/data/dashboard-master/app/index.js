const express = require("express");
const cors = require("cors");
const router = require("./routes");
const fs = require("fs");
// const fsPromises = require("fs").promises;

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

// 1) Définition du Path jusqu'au fichier .JSON (mocked)
const pathJSON =
   "E:/.OPENCLASSROOMS/PROJET 12/sportsee/src/data/dashboard-master/app/data/data.json";

// 2) Lecture du fichier : OK
fs.readFile(pathJSON, "utf8", (err, data) => {
   if (err) {
      console.log(`Error reading file from disk: ${err}`);
   } else {
      const databases = JSON.parse(data); // parse JSON string to JSON object
      console.log("c'est le contenu:", databases);
   }
});

////////////////////////////////////
// Tentative d'édition de fichier //
////////////////////////////////////
// const content = `"Yo les Noobs ! :-)"`;
const content = `"Salut beauté 123"`;

const { appendFile } = require("fs/promises");

async function appendToFile(fileName, data) {
   try {
      await appendFile(fileName, data, { flag: "w" });
      console.log(`Appended data to ${fileName}`);
   } catch (error) {
      console.error(`Got an error trying to append the file: {error.message}`);
   }
}
appendToFile(pathJSON, content);
