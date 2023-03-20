const { Router } = require('express');
const router = Router();
const bridge = "/api" // var penampung API
// panggil API
router.get(bridge, (req, res) => {
    res.status(200).json({
        message: "API for Tour Applications",
    })
})


// Routes
const placeRoute = require('./place')
const tourRoute = require('./tour')
const typeRoute = require('./type')

// Bridge
router.use(`${bridge}/places`, placeRoute);
router.use(`${bridge}/tours`, tourRoute);
router.use(`${bridge}/types`, typeRoute);

module.exports = router;