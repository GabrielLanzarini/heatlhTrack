import { useState } from "react"
import { PasswordInput } from "../Inputs/Inputs"
import style from "./Style.module.css"
import config from "../../config.json"
import axios from "axios"
import MessageModal from "../MessageModal/MessageModal"

export default function PasswordChangeModal({ active, handleActive, doctor }) {
    const [values, setValues] = useState({ oldPassword: "", newPassword: "", confirmPassword: "" })
    const [err, setErr] = useState({ oldPassword: "", newPassword: "", confirmPassword: "" })
    const [message, setMessage] = useState(false)

    const handleValue = (field, value) => setValues((prev) => ({ ...prev, [field]: value }))

    const handleErrors = () => {
        const newErros = {
            oldPassword: "",
            newPassword: values.confirmPassword.length < 12 ? "Senha muito fraca!" : "",
            confirmPassword: values.newPassword !== values.confirmPassword ? "Senhas não conferem" : "",
        }
        setErr(newErros)
        return Object.values(newErros).every((err) => err === "")
    }

    const handlePutPassword = async () => {
        try {
            if (message === true) return
            const { status } = await axios.put(`${config.base_url}/doctor/update/password`, { password: values.oldPassword, newPassword: values.newPassword }, { withCredentials: true })
            if (status === 204) {
                setMessage(true)
                setTimeout(() => {
                    setMessage(false)
                    handleActive()
                }, 2000)
            }
        } catch ({ response }) {
            if (response.status === 401) return setErr((prev) => ({ ...prev, oldPassword: response.data.message }))
            if (response.status === 400) return setErr((prev) => ({ ...prev, newPassword: response.data.message }))
        }
    }

    const handleSave = () => {
        if (!handleErrors()) return
        handlePutPassword()
    }

    return (
        <div style={active && { visibility: "hidden" }} className={`${style.main_container} `}>
            {message && <MessageModal message="Senha alterada com sucesso!" />}
            <div className={`${style.sub_container} animate__animated  animate__bounceIn`}>
                <div className={style.infos_container}>
                    <h2>Alteração de senha</h2>
                    <div className={style.inputs_container}>
                        <PasswordInput errorMessage={err} label="Password" name="oldPassword" value={values} handleValue={handleValue} />
                        <PasswordInput errorMessage={err} label="New Password" name="newPassword" value={values} handleValue={handleValue} />
                        <PasswordInput errorMessage={err} label="Confirm New Password" name="confirmPassword" value={values} handleValue={handleValue} />
                    </div>
                </div>
                <div className={style.row_container}>
                    <button onClick={handleSave} className="green_button">
                        Salvar
                    </button>
                    <button onClick={handleActive} className="delete_button">
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    )
}
