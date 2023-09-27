import { useEffect, useState } from "react"
import { DefaultInput } from "../components/Inputs/Inputs"
import MainLayout from "../components/MainLayout/Layout"
import { SideBarDoctor } from "../components/SideBar/Sidebar"
import style from "../style/Config.module.css"
import config from "../config.json"
import PasswordChangeModal from "../components/PasswordChangeModal/PasswordChageModal"
import axios from "axios"
import MessageModal from "../components/MessageModal/MessageModal"

export default function DoctorConfig() {
    const [values, setValues] = useState({ email: "", specialities: "" })
    const [err, setErr] = useState({ email: "" })
    const [specialitieArray, setSpecialitieArray] = useState([])
    const [serverData, setServerData] = useState()
    const [modal, setModal] = useState(false)
    const [message, setMessage] = useState(false)

    const handleValue = (field, value) => setValues((prev) => ({ ...prev, [field]: value }))
    const handleErr = (field, value) => setErr((prev) => ({ ...prev, [field]: value }))

    const handleDoctorData = async () => {
        try {
            const { data } = await axios.get(`${config.base_url}/doctor/infos`, { withCredentials: true })
            setServerData(data)
            handleValue("email", data.email)
            setSpecialitieArray(data.specialities)
        } catch (err) {
            console.log(err)
        }
    }

    const fetchUpdateData = async () => {
        try {
            if (message === true) return
            const { status } = await axios.put(`${config.base_url}/doctor/update`, { email: values.email, specialities: specialitieArray }, { withCredentials: true })
            if (status === 204) {
                setMessage(true)
                setTimeout(() => {
                    setMessage(false)
                }, 2000)
            }
        } catch ({ response }) {
            if (response.status === 409) handleErr("email", response.data.message)
        }
    }

    const handleEmailErr = async () => {
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

        const newErros = {
            email: !emailRegex.test(values.email) ? "Please insert a valid Email!" : "",
        }

        setErr(newErros)
        return Object.values(newErros).every((err) => err === "")
    }

    const handleUpdateInfos = async () => {
        if (!(await handleEmailErr())) return
        fetchUpdateData()
    }

    const handleModal = () => setModal((prev) => !prev)

    const handleAddSpecialitie = () => {
        if (values.specialities.length <= 2) return
        setSpecialitieArray((prev) => [...prev, values.specialities])
        handleValue("specialities", "")
    }

    const handleRemoveSpecialitie = (index) => {
        setSpecialitieArray((prev) => {
            const updateArray = [...prev]
            updateArray.splice(index, 1)
            return updateArray
        })
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

                            <div className={`${style.input_container} ${style.input_container_specialities}`}>
                                <div>
                                    <label htmlFor="specialities">Specialities</label>
                                    <div className={style.add_input_container}>
                                        <input
                                            onKeyDown={(e) => e.key === "Enter" && handleAddSpecialitie()}
                                            id="specialities"
                                            onChange={(e) => handleValue("specialities", e.target.value)}
                                            value={values.specialities}
                                            type="text"
                                            className={`${style.grey_input} `}
                                        />
                                        <button onClick={handleAddSpecialitie} className={style.button_add}>
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div className={style.cards_container}>
                                    {specialitieArray?.map((a, i) => (
                                        <button onClick={() => handleRemoveSpecialitie(i)} key={i} className={style.card_container}>
                                            <p>{a}</p>
                                            <span>+</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.change_container}>
                        <button onClick={handleUpdateInfos} className={style.change_button}>
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
