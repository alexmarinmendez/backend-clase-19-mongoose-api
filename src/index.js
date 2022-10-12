const app = require('./app')
const Loaders = require('./loaders')

Loaders.start()

app.listen(8080, () => console.log('Server is running...'))