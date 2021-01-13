var router = require('express').Router();

// const connection = require("../db");

router.get("/createnewalbum", function (req, res) {
    res.send("Hello createnewalbum get route");
});


router.post("/createnewalbum", function (req, res) {
    res.send("Hello createnewalbum post route");

    // const { title, genre, picture, artist} = req.body;
    // connection.query(
    //     'INSERT INTO album (title, genre, picture, artist) VALUES (?, ?, ?, ?)',
    //     [title, genre, picture, artist],
    //     (error, result) => {
    //         if (error) res.status(500).json({ message: "erreur 500" });
    //         else res.status(200).json({ message: "nouvel album ajouté !" });
    //     }
    // );

});

module.exports = router;
