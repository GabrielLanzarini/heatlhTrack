import PasswordChangeModal from "../../components/PasswordChangeModal/PasswordChageModal"
import MessageModal from "../../components/MessageModal/MessageModal"
import MainLayout from "../../components/MainLayout/Layout"
import style from "./DoctorConfig.module.css"

import { useEffect, useState } from "react"
import { DefaultInput, SpecialitiesInput } from "../../components/Inputs/Inputs"
import { SideBarDoctor } from "../../components/SideBar/Sidebar"
import { getDoctorInfo } from "../../data/doctor"
import { emailErr } from "../../verificator/fields"
import { updateData } from "./logic"

export default function DoctorConfig() {
    const [values, setValues] = useState({ email: "", specialities: "" })
    const [err, setErr] = useState()
    const [serverData, setServerData] = useState()
    const [specialitieArray, setSpecialitieArray] = useState([])
    const [modal, setModal] = useState(false)
    const [message, setMessage] = useState(false)

    const handleClearSpecialitie = () => setValues(prev => ({ ...prev, specialities: "" }))

    const handleValue = ({ target }) => setValues((prev) => ({ ...prev, [target.id]: target.value }))
    const handleErr = (field, value) => setErr((prev) => ({ ...prev, [field]: value }))

    const handleModal = () => setModal((prev) => !prev)

    const handleDoctorData = async () => {
        const data = await getDoctorInfo()
        setServerData(data)
        setValues(prev => ({ ...prev, email: data.email }))
        setSpecialitieArray(data.specialities)
    }

    const handleUpdateData = async () => {
        if (handleEmailErr()) return
        try {
            await updateData(values, specialitieArray)
        } catch ({ status, data }) {
            if (status === 409) handleErr("email", data)
        }
    }

    const handleEmailErr = () => {
        const newErr = emailErr(values)
        setErr(newErr)
        return !Object.values(newErr).every((err) => err === "")
    }

    useEffect(() => {
        handleDoctorData()
    }, [])

    if (!serverData)
        return (
            <div>
                <h1>Usuário não logado</h1>
            </div>
        )

    return (
        <div className={style.main_container}>
            <SideBarDoctor />
            {modal && <PasswordChangeModal handleActive={handleModal} />}
            {message && <MessageModal message="Dados alterados com sucesso!" />}
            <MainLayout>
                <div className={style.dashboard_container_int}>
                    <div className={style.all_infos_container}>
                        <div className={style.advice_container}>
                            <h2>Aqui você pode visualizar e editar suas configurações pessoais</h2>
                        </div>
                        <div className={style.info_container}>
                            <p className={style.info_text} htmlFor="">
                                <span>Nome: </span>
                                {serverData.first_name} {serverData.last_name}
                            </p>
                            <p className={style.info_text} htmlFor="">
                                <span>CPF: </span> {serverData.cpf}
                            </p>
                            <DefaultInput errorMessage={err} name="email" label="Email" handleValue={handleValue} value={values} />
                            <SpecialitiesInput clearValue={handleClearSpecialitie} name="specialities" value={values} handleValue={handleValue} />
                        </div>
                    </div>
                    <div className={style.change_container}>
                        <button onClick={handleUpdateData} className={style.change_button}>
                            Salvar
                        </button>
                        <button onClick={handleModal} className={style.change_button}>
                            Alterar senha
                        </button>
                        <button className={style.delete_button}>Deletar minha conta</button>
                    </div>
                </div>
            </MainLayout>
        </div>
    )
}
