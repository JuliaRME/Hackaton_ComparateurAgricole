const router = require("express").Router();



// ajout de route
const routeExemple = require('./route_exemple');

router.use('/album', routeExemple);
//



module.exports = router;