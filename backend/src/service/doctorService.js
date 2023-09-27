const Doctor = require("../models/doctor")
const { sign } = require("jsonwebtoken")
const CustomError = require("../helper/customError")
const { hash, genSalt, compare } = require("bcrypt")
const CPFValidator = require("../helper/CpfValidator")

const createDoctor = async (first_name, last_name, email, password, cpf, specialities) => {
    try {
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

        if (!emailRegex.test(email)) throw new CustomError("Please insert a valid Email!", 409)
        const cpfReplace = cpf.replace(/\D/g, "")
        if (!CPFValidator(cpfReplace)) throw new CustomError("Insira um cpf válido!", 422)
        const findEmail = await Doctor.findOne({ where: { email: email } })
        if (findEmail) throw new CustomError("Email já registrado!", 409)
        const findCpf = await Doctor.findOne({ where: { cpf: cpfReplace } })
        if (findCpf) throw new CustomError("Cpf já registrado", 422)
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
    if (!findDoctor) throw new CustomError("Email não encontrado", 404)
    const passCompare = await compare(password, findDoctor.password)
    if (!passCompare) throw new CustomError("Senha incorreta", 401)
    return sign({ id: findDoctor.id }, "secret", { expiresIn: 60000 })
}

const getDoctor = async (id) => await Doctor.findOne({ where: { id: id }, attributes: ["first_name", "last_name", "email", "cpf", "specialities", "createdAt"] })

const updateDoctor = async (id, email, specialities) => {
    const findEmail = await Doctor.findOne({ where: { email: email } })
    if (findEmail && !(findEmail.id == id)) throw new CustomError("Email já registrado!", 409)
    await Doctor.update({ email: email, specialities: specialities }, { where: { id: id } })
}

const updateDoctorPassword = async (id, password, newPassword) => {
    const findDoctor = await Doctor.findOne({ where: { id: id } })
    const passCompare = await compare(password, findDoctor.password)
    console.log(findDoctor.password);
    if (!passCompare) throw new CustomError("Senha incorreta", 401)
    if (password == newPassword) throw new CustomError("Por favor, escolha uma senha diferente da anterior", 400)
    const hashPass = await hash(newPassword, await genSalt(12))
    await Doctor.update({ password: hashPass }, { where: { id: id } })
}

module.exports = { createDoctor, verifyDoctor, getDoctor, updateDoctor, updateDoctorPassword }
