const config = require('../config')

function getPool () {
  const mysql = require('mysql2/promise')

  const pool = mysql.createPool(config.database)

  return pool
}

module.exports = getPool