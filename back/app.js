const express = require("express");
const app = express();
const mainRouter = require("./routes/index"); //fichier de config pour le router d'express
require("dotenv").config(); // fichier pour se connecter a la BD

// config d'express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// test serveur sur la route /
app.get("/", (req, res) => {
  res.send("Hello world");
});


// router - a modifier en fonction de la route que l'on veut mettre en place
app.use("/api", mainRouter);


// export du serveur
let server = app.listen(process.env.SERVER_PORT || 8000, function () {
  console.log("Listening on port " + server.address().port);
});