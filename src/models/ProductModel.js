const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
  id: ObjectId,
  title: String,
  description: String,
  price: Number
});

const ProductModel = mongoose.model('product', ProductSchema)

module.exports = ProductModel