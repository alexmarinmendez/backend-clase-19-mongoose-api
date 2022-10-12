const { Router } = require('express')

const routes = Router()

routes.get('/health', (req, res) => {
    return res.status(200).json({ message: 'Server is on... '})
})

module.exports = routes