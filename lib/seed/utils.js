const glob = require('glob')
const path = require('path')
const config = require('../../config')

exports.getDB = () => {
  const mysql = require('mysql2/promise')

  const pool = mysql.createPool(config.database)

  return pool
}

exports.getTables = () => require(config.tablesPath)

exports.getServices = () => {
  return glob.sync(`${config.servicesPath}/!(Base|index|init).js`)
    .map(_ => ({
      name: path.basename(_, '.js').toLowerCase(),
      path: _
    }))
}

exports.getControllers = () => {
  return glob.sync(`${config.controllersPath}/!(Base).js`)
    .map(_ => ({
      name: path.basename(_, '.js').toLowerCase(),
      path: _
    }))
}

exports.getRoutes = () => {
  return glob.sync(`${config.routesPath}/!(index).js`)
    .map(_ => ({
      baseURL: `/${path.basename(_, '.js')}`,
      path: _
    }))
}