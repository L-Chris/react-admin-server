const getPool = require('.')

async function createTable (sql) {
  const pool = await getPool()
  return pool.query(sql, [])
}

const userTableSql = `
  create table if not exists users(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL COMMENT '名称',
    account VARCHAR(100) NOT NULL COMMENT '账户',
    password VARCHAR(100) NOT NULL COMMENT '密码',
    createTime VARCHAR(100) NOT NULL COMMENT '创建时间',
    PRIMARY KEY ( id )
  )
`

const menuTableSql = `
  create table if not exists menus(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL COMMENT '名称',
    createTime VARCHAR(100) NOT NULL COMMENT '创建时间',
    PRIMARY KEY ( id )
  )
`

const orderTableSql = `
  create table if not exists orders(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL COMMENT '名称',
    price VARCHAR(100) NOT NULL COMMENT '价格',
    isPay TINYINT(1) NOT NULL COMMENT '是否支付',
    createTime VARCHAR(100) NOT NULL COMMENT '创建时间',
    PRIMARY KEY ( id )
  )
`

const shopTableSql = `
  create table if not exists shops(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL COMMENT '名称',
    createTime VARCHAR(100) NOT NULL COMMENT '创建时间',
    PRIMARY KEY ( id )
  )
`

const tables = [userTableSql, menuTableSql, orderTableSql, shopTableSql]

tables.forEach(_ => createTable(_))