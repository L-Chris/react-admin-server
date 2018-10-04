exports.userTableSql = `
  create table if not exists users(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL COMMENT '名称',
    account VARCHAR(100) NOT NULL COMMENT '账户',
    password VARCHAR(100) NOT NULL COMMENT '密码',
    phone VARCHAR(100) NOT NULL COMMENT '手机',
    email VARCHAR(100) NOT NULL COMMENT '邮箱',
    createTime VARCHAR(100) NOT NULL COMMENT '创建时间',
    PRIMARY KEY ( id )
  )
`

exports.menuTableSql = `
  create table if not exists menus(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL COMMENT '名称',
    createTime VARCHAR(100) NOT NULL COMMENT '创建时间',
    PRIMARY KEY ( id )
  )
`

exports.orderTableSql = `
  create table if not exists orders(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL COMMENT '名称',
    price VARCHAR(100) NOT NULL COMMENT '价格',
    isPay TINYINT(1) NOT NULL COMMENT '是否支付',
    createTime VARCHAR(100) NOT NULL COMMENT '创建时间',
    PRIMARY KEY ( id )
  )
`

exports.shopTableSql = `
  create table if not exists shops(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL COMMENT '名称',
    createTime VARCHAR(100) NOT NULL COMMENT '创建时间',
    PRIMARY KEY ( id )
  )
`