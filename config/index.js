const path = require('path')

const resolvePath = _ => path.join(__dirname, '../', _)

module.exports = {
  port: 3001,
  database: {
    database: 'react_admin',
    user: 'root',
    password: '123456',
    port: 3306,
    host: 'localhost'
  },
  tablesPath: resolvePath('db'),
  servicesPath: resolvePath('services'),
  controllersPath: resolvePath('controllers'),
  routesPath: resolvePath('routes')
}