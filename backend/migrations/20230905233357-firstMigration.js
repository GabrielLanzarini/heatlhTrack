"use strict"

const Doctor = require("../src/models/doctor")
const Pacient = require("../src/models/pacient")

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("doctor", Doctor.getAttributes())
    await queryInterface.createTable("pacient", Pacient.getAttributes())
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("doctor")
    await queryInterface.dropTable("pacient")
  },
}
