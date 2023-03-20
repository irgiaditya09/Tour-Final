const tourRoutes = require('express').Router();
const {TourController} = require('../controllers')

tourRoutes.get('/', TourController.getTours)
tourRoutes.post('/packet', TourController.packetTours)
tourRoutes.put('/edit/:id', TourController.edit)
tourRoutes.delete('/delete/:id', TourController.delete)
tourRoutes.get("/details/:id", TourController.getDetailsById)


module.exports = tourRoutes;