import { useEffect, useState } from "react"
import style from "./Style.module.css"

export default function MessageModal({ message }) {
    const [teste, setTeste] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setTeste(true)
        }, 1500)
    })

    return (
        <div className={`${style.main_container} animate__animated  ${teste ? "animate__fadeOutUp" : "animate__fadeInDown"}`}>
            <p>{message}</p>
        </div>
    )
}
