const Pacient = require("../models/pacient")
const { sign } = require("jsonwebtoken")
const CustomError = require("../helper/customError")
const { hash, genSalt, compare } = require("bcrypt")

const createPacient = async (first_name, last_name, email, password, cpf) => {
    try {
        const cpfReplace = cpf.replace(/\D/g, "")
        const findEmail = await Pacient.findOne({ where: { email: email } })
        if (findEmail) throw new CustomError("Email already registered", 409)
        const findCpf = await Pacient.findOne({ where: { cpf: cpfReplace } })
        if (findCpf) throw new CustomError("Cpf already registered", 422)
        const hashPass = await hash(password, await genSalt(12))
        await Pacient.create({
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: hashPass,
            cpf: cpfReplace,
        })
    } catch (err) {
        throw err
    }
}

const verifyPacient = async (email, password) => {
    const findPacient = await Pacient.findOne({ where: { email: email } })
    if (!findPacient) throw new CustomError("Email not registered", 404)
    const passCompare = await compare(password, findPacient.password)
    if (!passCompare) throw new CustomError("Incorrect password", 401)
    return sign({ id: findPacient.id }, "secret", { expiresIn: 60000 })
}

module.exports = { createPacient, verifyPacient }
