const ProductModel = require('../models/ProductModel')

class ProductController {
    async store(req, res) {
        const createdProduct = await ProductModel.create(req.body)
        return res.status(200).json(createdProduct)
    }

    async index() {

    }

    async show() {

    }

    async update() {

    }

    async destroy() {

    }
}

module.exports = new ProductController()