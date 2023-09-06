const { Sequelize, DataTypes } = require("sequelize")
const sequelize = require("../databaseCon")
const { v4: uuidv4 } = require("uuid")

const Doctor = sequelize.define("doctor", {
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
  specialities: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
})

module.exports = Doctor
