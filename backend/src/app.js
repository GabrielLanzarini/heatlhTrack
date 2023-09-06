const express = require("express")
const router = require("./routes")
const sequelize = require("./databaseCon")
const { json } = require("express")
const app = express()

sequelize.authenticate().then(() => {
  app.use(json())

  app.use("/api/v1", router)

  app.listen(5000, () => {
    console.log("Listening on http://localhost:5000")
  })
})