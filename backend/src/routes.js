const { Router } = require("express")
const doctorRouter = require("./controller/doctorController")
const pacientRouter = require("./controller/pacientController")
const routes = Router()

routes.use("/doctor", doctorRouter)
routes.use("/pacient", pacientRouter)

module.exports = routes
