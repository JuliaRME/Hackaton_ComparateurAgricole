const router = require('express').Router();

const connection  = require("../db");


// récuperer tous les villes

router.get("/", (req, res) => {
    const sql = `SELECT DISTINCT c.id, c.city, c.lat, c.longitude FROM cities AS c JOIN farmers AS f WHERE c.id = f.city_id `;
    connection.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ errorMessage: err.message });
        } else {
            res.status(200).json(result);
        }
    });
});

module.exports = router;