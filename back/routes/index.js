const router = require("express").Router();
const routeFarmer = require('./farmers.routes');
const routeCities = require('./cities.routes');


router.use('/farmers', routeFarmer);
router.use('/cities', routeCities);



module.exports = router;