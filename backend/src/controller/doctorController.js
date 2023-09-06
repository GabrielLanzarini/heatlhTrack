const { Router } = require("express")
const { createDoctor, verifyDoctor } = require("../service/doctorService")

const doctorRouter = Router()

doctorRouter.post("/create", async (req, res) => {
  const { first_name, last_name, email, password, cpf, specialities } = req.body
  try {
    await createDoctor(first_name, last_name, email, password, cpf, specialities)
    res.status(204).json({ message: "Doctor successfully created!" })
  } catch ({ message, status }) {
    res.status(status || 404).json({ message: message || "Internal server error!" })
  }
})

doctorRouter.post("/login", async (req, res) => {
  const { email, password } = req.body
  try {
    const token = await verifyDoctor(email, password)
    res.cookie("x-acess-doctor", token).status(200).json({ message: "Successfully logged!" })
  } catch ({ message, status }) {
    res.status(status || 404).json({ message: message || "Internal server error!" })
  }
})

module.exports = doctorRouter
