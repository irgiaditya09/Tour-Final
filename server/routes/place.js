const placeRoutes = require('express').Router()
const {PlaceController} = require('../controllers')

placeRoutes.get('/all', PlaceController.getAllPlaces)
placeRoutes.delete('/remove/:id', PlaceController.remove)
placeRoutes.post('/add', PlaceController.add)
placeRoutes.put('/edit/:id', PlaceController.edit)

module.exports = placeRoutes