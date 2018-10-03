const config = require('../config')

function getPool () {
  const mysql = require('mysql2')

  const pool = mysql.createPool(config.database)

  return pool.promise()
}

module.exports = getPool