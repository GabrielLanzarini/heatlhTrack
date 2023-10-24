import { useState } from "react"
import style from "./Register.module.css"
import { Link } from "react-router-dom"
import { DefaultInput, PasswordInput, SpecialitiesInput } from "../../components/Inputs/Inputs"
import { CPFValidator } from "../../verificator/fields"
import { register, verifyInputs } from "./logic"

export default function DoctorRegister() {
    const [values, setValues] = useState({ first_name: "", last_name: "", email: "", password: "", confirm_password: "", cpf: "", specialities: "" })
    const [errors, setErrors] = useState()
    const [specialitieArray, setSpecialitieArray] = useState([])

    const handleClearSpecialitie = () => setValues(prev => ({ ...prev, specialities: "" }))
    const handleValue = ({ target }) => setValues((prev) => ({ ...prev, [target.id]: target.value }))
    const handleErrors = (field, value) => setErrors((prev) => ({ ...prev, [field]: value }))

    const handleVerifyInputs = () => {
        const newErros = verifyInputs(values)
        setErrors(newErros)
        return !Object.values(newErros).every((err) => err === "")
    }

    const handleRegister = async () => {
        if (handleVerifyInputs()) return
        try {
            register(values, specialitieArray)
            const modalInt = document.querySelector("#modalInt")
            const modalExt = document.querySelector("#modalExt")
            modalInt.classList.add("animate__bounceIn")
            modalExt.style.visibility = "visible"
        } catch ({ status, data }) {
            if (status === 409) return handleErrors("email", data)
            if (status === 422) return handleErrors("cpf", data)
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
                    <Link to={`/doctor/login`} className="green_button">
                        Login page
                    </Link>
                </div>
            </div>
            <div style={{ backgroundImage: `url(https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)` }} className={style.left_container} />
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
                        <SpecialitiesInput clearValue={handleClearSpecialitie} name="specialities" handleValue={handleValue} value={values} />

                    </div>
                    <button onClick={handleRegister} className="green_button">
                        Register
                    </button>
                    <hr />
                    <p>
                        Already have an account? <Link to={`/doctor/login`}>Sign In</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
