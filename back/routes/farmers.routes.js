const router = require('express').Router();

const { connection}  = require("../db");


// récuperer tous les agriculteurs d'une ville

router.get("/city/:id", (req, res) => {
    const { id } = req.params;
    const sql = `SELECT * FROM farmers WHERE city_id = ?`;
    connection.query(sql, [id], (err, result) => {
        if (err) {
            res.status(500).json({ errorMessage: err.message });
        } else {
            res.status(200).json(result);
        }
    });
});

// récuperer tous les infos d'un agriculteurs


router.get("/:id", (req, res) => {
    const { id } = req.params;
    const sql = `SELECT * FROM farmers WHERE id = ?`;
    connection.query(sql, [id], (err, result) => {
        if (err) {
            res.status(500).json({ errorMessage: err.message });
        } else {
            sql = `SELECT * FROM transactions WHERE farmer_id = ?`;
            connection.query(sql, [id], (errOne, resultOne) => {
                if (errOne) {
                    res.status(500).json({ errorMessage: errOne.message });
                } else {
                    const farmer = {
                        farmer: result,
                        transactions: resultOne
                    }
                    res.status(200).send(farmer);
                }
            });
        };
    });
});


module.exports = router;