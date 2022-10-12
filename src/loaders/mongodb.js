const mongoose = require('mongoose')

async function startDB() {
    await mongoose.connect('mongodb://localhost/coder')
}

module.exports = startDB