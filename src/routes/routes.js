const {Router} = require('express')
const routes = Router()
const ProductController = require('../controllers/ProductController')

// routes of the application
routes.get('/', ProductController.show)
routes.get('/:id', ProductController.showOne) 
routes.post('/create', ProductController.create)
routes.post('/update/:id', ProductController.update)
routes.post('/delete/:id', ProductController.delete)

module.exports = routes