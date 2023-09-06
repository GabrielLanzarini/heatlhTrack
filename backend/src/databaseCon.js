const { Sequelize } = require("sequelize")

const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "postgres",
  database: "healthtrack",
  port: 5444,
  define: {
    freezeTableName: true,
  },
})

module.exports = sequelize
