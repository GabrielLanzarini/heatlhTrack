const { Router } = require("express")
const { createPacient, verifyPacient } = require("../service/pacientService")

const pacientRouter = Router()

pacientRouter.post("/create", async (req, res) => {
  const { first_name, last_name, email, password, cpf } = req.body
  try {
    await createPacient(first_name, last_name, email, password, cpf)
    res.status(204).json({ message: "Pacient successfully created!" })
  } catch ({ message, status }) {
    res.status(status || 404).json({ message: message || "Internal server error!" })
  }
})

pacientRouter.post("/login", async (req, res) => {
  const { email, password } = req.body
  try {
    const token = await verifyPacient(email, password)
    res.cookie("x-acess-pacient", token).status(200).json({ message: "Successfully logged!" })
  } catch ({ message, status }) {
    res.status(status || 404).json({ message: message || "Internal server error!" })
  }
})

module.exports = pacientRouter
