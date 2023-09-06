const { Sequelize, DataTypes } = require("sequelize")
const sequelize = require("../databaseCon")
const { v4: uuidv4 } = require("uuid")

const Pacient = sequelize.define("pacient", {
  id: {
    type: DataTypes.UUID,
    defaultValue: uuidv4(),
    primaryKey: true,
  },
  first_name: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  cpf: {
    type: DataTypes.CHAR(11),
    allowNull: false,
  },
})

module.exports = Pacient
