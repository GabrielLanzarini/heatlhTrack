import { useState } from "react"
import { DefaultInput } from "../components/Inputs/Inputs"
import PacientLayout from "../components/PacientLayout/PacientLayout"
import style from "../style/PacientConfig.module.css"
import PasswordChangeModal from "../components/PasswordChangeModal/PasswordChageModal"

export default function PacientConfig() {
    const [email, setEmail] = useState({ email: "" })
    const [modal, setModal] = useState(false)
    
    const handleValue = (field, value) => setEmail((prev) => ({ ...prev, [field]: value }))
    const handleModal = () => setModal((prev) => !prev)

    return (
        <PacientLayout>
            {modal && <PasswordChangeModal handleActive={handleModal} />}

            <div className={style.main_container}>
                <div className={style.main_container_int}>
                    <h1 className={style.page_name}>Configurações</h1>
                    <div className={style.infos_container}>
                        <p className={style.info_text}>
                            <span>Nome: </span>
                            Gabriel Henrique Antonelli Lanzarini
                        </p>
                        <p className={style.info_text}>
                            <span>CPF: </span>
                            05235875974
                        </p>
                        <DefaultInput handleValue={handleValue} label="Email" value={email} name="email" />
                    </div>
                </div>
                <div className={style.buttons_container}>
                    <button className="green_button">Salvar</button>
                    <button className="green_button" onClick={handleModal}>Alterar senha</button>
                    <button className="delete_button">Deletar conta</button>
                </div>
            </div>
        </PacientLayout>
    )
}
