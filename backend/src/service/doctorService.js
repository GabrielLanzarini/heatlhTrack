const Doctor = require("../models/doctor")
const { sign } = require("jsonwebtoken")
const CustomError = require("../helper/customError")
const { hash, genSalt, compare } = require("bcrypt")

const createDoctor = async (first_name, last_name, email, password, cpf, specialities) => {
    try {
        const cpfReplace = cpf.replace(/\D/g, "")
        const findEmail = await Doctor.findOne({ where: { email: email } })
        if (findEmail) throw new CustomError("Email already registered!", 409)
        const findCpf = await Doctor.findOne({ where: { cpf: cpfReplace } })
        if (findCpf) throw new CustomError("Cpf already registered", 422)
        const hashPass = await hash(password, await genSalt(12))
        await Doctor.create({
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: hashPass,
            cpf: cpfReplace,
            specialities: specialities,
        })
    } catch (err) {
        throw err
    }
}

const verifyDoctor = async (email, password) => {
    const findDoctor = await Doctor.findOne({ where: { email: email } })
    if (!findDoctor) throw new CustomError("Email not registered", 404)
    const passCompare = await compare(password, findDoctor.password)
    if (!passCompare) throw new CustomError("Incorrect password", 401)
    return sign({ id: findDoctor.id }, "secret", { expiresIn: 60000 })
}

module.exports = { createDoctor, verifyDoctor }
