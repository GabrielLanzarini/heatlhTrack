const { NextFunction, Request, Response } = require("express")
const { verify } = require("jsonwebtoken")

// const secret = process.env.SECRET_KEY

const JwtVerifyDoctor = (req, res, next) => {
    try {
        const token = req.cookies["x-acess-doctor"]

        verify(token, "secret", (err, decoded) => {
            if (err) {
                return res.status(404).json({
                    message: "Realize o login como doutor para continuar!",
                })
            }
            req.params.id = decoded.id
            next()
        })
    } catch (err) {
        res.status(404).json({ message: "Internar server error!" })
    }
}

const JwtVerifyPacient = (req, res, next) => {
    try {
        const token = req.cookies["x-acess-pacient"]

        verify(token, "secret", (err, decoded) => {
            if (err) {
                return res.status(404).json({
                    message: "Realize o login como paciente para continuar!",
                })
            }
            req.params.id = decoded.id
            next()
        })
    } catch (err) {
        res.status(404).json({ message: "Internar server error!" })
    }
}

module.exports = { JwtVerifyDoctor, JwtVerifyPacient }
