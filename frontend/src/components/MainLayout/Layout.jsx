import { useEffect, useState } from "react"
import style from "./Style.module.css"

export default function MainLayout({ children, section }) {
    const [hours, setHours] = useState()
    const [date, setDate] = useState()

    const refreshHours = () => {
        const date = new Date()
        setHours(`${date.getHours()}:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}`)
    }

    const renderDate = () => {
        refreshHours()
        const date = new Date()
        const months = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
        setDate(`${date.getDate()} de ${months[date.getMonth() - 1]} de ${date.getFullYear()}`)
    }

    useEffect(() => {
        renderDate()
        refreshHours()
        setInterval(() => {
            refreshHours()
        }, 1000)
    }, [])

    return (
        <div className={style.main_container}>
            <div className={style.top_container}>
                <div className={style.page_text_container}>
                    <h1 className={style.page_name}>Configurações</h1>
                    <h2 className={style.page_section}>{section}</h2>
                </div>
                <div className={style.date_container}>
                    <h2 className={style.date_text}>{date}</h2>
                    <h2 className={style.date_text}>{hours}</h2>
                </div>
            </div>
            <div className={style.dashboard_container}>{children}</div>
        </div>
    )
}
