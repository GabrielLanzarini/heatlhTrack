const { Router } = require("express")
const { createDoctor, verifyDoctor, getDoctor, updateDoctor, updateDoctorPassword } = require("../service/doctorService")
const { JwtVerifyDoctor } = require("../middleware/jwtVerify")

const doctorRouter = Router()

doctorRouter.post("/create", async (req, res) => {
    const { first_name, last_name, email, password, cpf, specialities } = req.body
    console.log(first_name, last_name, email, password, cpf, specialities)
    try {
        await createDoctor(first_name, last_name, email, password, cpf, specialities)
        res.status(204).json({ message: "Doctor successfully created!" })
    } catch ({ message, status }) {
        res.status(status || 404).json({ message: message || "Internal server error!" })
    }
})

doctorRouter.put("/update", JwtVerifyDoctor, async (req, res) => {
    const { id } = req.params
    const { email, specialities } = req.body
    console.log(email, specialities)
    try {
        await updateDoctor(id, email, specialities)
        res.status(204).json({ message: "Successfully updated!" })
    } catch ({ message, status }) {
        res.status(status || 404).json({ message: message || "Internal server error!" })
    }
})

doctorRouter.put("/update/password", JwtVerifyDoctor, async (req, res) => {
    const { id } = req.params
    const { password, newPassword } = req.body
    try {
        await updateDoctorPassword(id, password, newPassword)
        res.status(204).json({ message: "Password successfully created!" })
    } catch ({ message, status }) {
        res.status(status || 404).json({ message: message || "Internal server error!" })
    }
})

doctorRouter.post("/login", async (req, res) => {
    const { email, password } = req.body
    console.log(email, password)
    try {
        const token = await verifyDoctor(email, password)
        res.cookie("x-acess-doctor", token).status(200).json({ message: "Successfully logged!" })
    } catch ({ message, status }) {
        res.status(status || 404).json({ message: message || "Internal server error!" })
    }
})

doctorRouter.get("/infos", JwtVerifyDoctor, async (req, res) => {
    const { id } = req.params
    try {
        const infos = await getDoctor(id)
        res.status(200).json(infos)
    } catch ({ message, status }) {
        res.status(status || 404).json({ message: message || "Internal server error!" })
    }
})

module.exports = doctorRouter
