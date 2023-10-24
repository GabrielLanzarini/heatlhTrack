import { useState } from "react"
import style from "./Login.module.css"
import { Link, useNavigate } from "react-router-dom"
import { DefaultInput, PasswordInput } from "../../components/Inputs/Inputs"
import { loginDoctor } from "../../data/doctor"


export default function DoctorLogin() {
    const [values, setValues] = useState({ email: "", password: "" })
    const [errors, setErrors] = useState()
    const navigate = useNavigate()

    const handleValue = ({ target }) => setValues((prev) => ({ ...prev, [target.id]: target.value }))
    const handleErrors = (field, value) => setErrors((prev) => ({ ...prev, [field]: value }))

    const handleLogin = async () => {
        try {
            await loginDoctor(values)
            navigate("/doctor/config")
        } catch ({ status, data }) {
            if (status === 404) return handleErrors("email", data)
            handleErrors("email", "")
            if (status === 401) return handleErrors("password", data)
            handleErrors("password", "")
        }
    }

    return (
        <div className={style.main_container}>
            <div style={{ backgroundImage: `url(https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)` }} className={style.left_container} />
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
                    <button onClick={handleLogin} className="green_button">
                        Login
                    </button>
                    <hr />
                    <p>
                        Don’t have an account? <Link to={`/doctor/register`}>Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
