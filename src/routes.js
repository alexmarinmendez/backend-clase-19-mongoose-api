const { Router } = require('express')
const ProductController = require('./controllers/ProductController')

const routes = Router()

routes.get('/health', (req, res) => {
    return res.status(200).json({ message: 'Server is on... '})
})

routes.post('/products', ProductController.store)

module.exports = routes