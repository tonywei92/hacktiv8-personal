const argv = process.argv.slice(2)
const { indexRoutes } = require('./routes')

indexRoutes(argv)
