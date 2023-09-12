import { useState } from "react"
import style from "../style/Login.module.css"
import { Link, useNavigate } from "react-router-dom"
import { DefaultInput, PasswordInput } from "../components/PasswordInput/PasswordInput"
import config from "../config.json"
import axios from "axios"

export default function DoctorLogin() {
    const navigate = useNavigate()
    const [values, setValues] = useState({ email: "", password: "" })
    const [errors, setErrors] = useState({ email: "", password: "" })

    const handleValue = (field, value) => setValues((prev) => ({ ...prev, [field]: value }))
    const handleErrors = (field, value) => setErrors((prev) => ({ ...prev, [field]: value }))

    const handleLogin = async () => {
        try {
            const response = await axios.post(`${config.base_url}/pacient/login`, { email: values.email, password: values.password }, { withCredentials: true })
            console.log(response.status)
            if (response.status === 200) navigate("/")
        } catch (err) {
            const { response } = err
            console.log(response)
            if (response.status === 404) return handleErrors("email", response.data.message)
            handleErrors("email", "")
            if (response.status === 401) return handleErrors("password", response.data.message)
            handleErrors("password", "")
        }
    }

    return (
        <div className={style.main_container}>
            <div style={{ backgroundImage: `url(https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)` }} className={style.left_container} />
            <div className={style.right_container}>
                <div className={style.right_container_int}>
                    <div>
                        <h1>Welcome back!</h1>
                        <p>Fill your credentials to have acess all features</p>
                    </div>
                    <div className={style.inputs_container}>
                        <DefaultInput errorMessage={errors} handleValue={handleValue} name="email" value={values} placeholder="Email" />
                        <PasswordInput errorMessage={errors} handleValue={handleValue} name="password" value={values} placeholder="Password" />
                    </div>
                    <button onClick={handleLogin} className={style.green_button}>
                        Login
                    </button>
                    <hr />
                    <p>
                        Don’t have an account? <Link to={`/pacient/register`}>Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
