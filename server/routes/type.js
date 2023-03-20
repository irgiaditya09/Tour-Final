const typeRoutes = require('express').Router()
const {TypeController} = require('../controllers')

typeRoutes.get('/', TypeController.getTypes)
typeRoutes.post('/add', TypeController.add)
typeRoutes.delete('/delete/:id', TypeController.delete)
typeRoutes.put('/edit/:id', TypeController.editTypes)

module.exports = typeRoutes