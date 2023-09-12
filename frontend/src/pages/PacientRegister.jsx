import { useEffect, useRef, useState } from "react"
import style from "../style/Register.module.css"
import { Link } from "react-router-dom"
import { DefaultInput, PasswordInput } from "../components/PasswordInput/PasswordInput"
import { CPFValidator } from "../helper/cpfValidator"
import config from "../config.json"
import axios from "axios"

export default function PacientRegister() {
    const [values, setValues] = useState({ first_name: "", last_name: "", email: "", password: "", confirm_password: "", cpf: "" })
    const [errors, setErrors] = useState({ first_name: "", last_name: "", email: "", password: "", confirm_password: "", cpf: "" })

    const handleValue = (field, value) => setValues((prev) => ({ ...prev, [field]: value }))
    const handleErrors = (field, value) => setErrors((prev) => ({ ...prev, [field]: value }))

    const handleVerifyInputs = () => {
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

        const newErros = {
            first_name: values.first_name.length <= 2 ? "Please insert a valid name!" : "",
            last_name: values.last_name.length <= 2 ? "Please insert a valid last name!" : "",
            email: !emailRegex.test(values.email) ? "Please insert a valid Email!" : "",
            password: values.password.length < 10 ? "The password must be at least 10 characters long!" : "",
            confirm_password: values.password !== values.confirm_password ? "Passwords do not match!" : "",
            cpf: !CPFValidator(values.cpf) ? "Please insert a valid CPF!" : "",
        }

        setErrors(newErros)
        return Object.values(newErros).every((err) => err === "")
    }

    const handleRegister = async () => {
        if (!handleVerifyInputs()) return
        try {
            const res = await axios.post(`${config.base_url}/pacient/create`, {
                first_name: values.first_name,
                last_name: values.last_name,
                email: values.email,
                cpf: values.cpf,
                password: values.password,
            })
            if (res.status === 204) {
                const modalInt = document.querySelector("#modalInt")
                const modalExt = document.querySelector("#modalExt")
                modalInt.classList.add("animate__bounceIn")
                modalExt.style.visibility = "visible"
            }
        } catch (err) {
            const { response } = err
            if (response.status === 409) return handleErrors("email", response.data.message)
            if (response.status === 422) return handleErrors("cpf", response.data.message)
        }
    }

    return (
        <div className={style.main_container}>
            <div id="modalExt" className={`animate__animated ${style.modal_container}`}>
                <div id="modalInt" className={style.modal_container_int}>
                    <svg className={style.icon_check} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M10.0007 15.1709L19.1931 5.97852L20.6073 7.39273L10.0007 17.9993L3.63672 11.6354L5.05093 10.2212L10.0007 15.1709Z"></path>
                    </svg>
                    <p>Congratulations, your registration was successful!</p>
                    <Link to={`/pacient/login`} className={style.green_button}>
                        Login page
                    </Link>
                </div>
            </div>
            <div style={{ backgroundImage: `url(https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)` }} className={style.left_container} />
            <div className={style.right_container}>
                <div className={style.right_container_int}>
                    <div>
                        <h1>Welcome!</h1>
                        <p>Fill your credentials and register</p>
                    </div>
                    <div className={style.inputs_container}>
                        <div className={style.inputs_container_row}>
                            <DefaultInput errorMessage={errors} maxLenght={30} handleValue={handleValue} label="First Name" name="first_name" value={values} />
                            <DefaultInput errorMessage={errors} maxLenght={30} handleValue={handleValue} label="Last Name" name="last_name" value={values} />
                        </div>
                        <div className={style.input_container}>
                            <DefaultInput errorMessage={errors} maxLenght={60} handleValue={handleValue} label="Email" name="email" value={values} />
                        </div>
                        <div className={style.inputs_container_row}>
                            <PasswordInput errorMessage={errors} handleValue={handleValue} value={values} name="password" label="Password" />
                            <PasswordInput errorMessage={errors} handleValue={handleValue} value={values} name="confirm_password" label="Confirm Password" />
                        </div>
                        <DefaultInput errorMessage={errors} mask="999.999.999-99" handleValue={handleValue} label="CPF" name="cpf" value={values} />
                    </div>
                    <button onClick={handleRegister} className={style.green_button}>
                        Register
                    </button>
                    <hr />
                    <p>
                        Already have an account? <Link to={`/pacient/login`}>Sign In</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
