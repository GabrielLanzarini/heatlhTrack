import { Link } from "react-router-dom"
import style from "./Style.module.css"

export default function PacientLayout({ children }) {
    return (
        <div className={style.main_container}>
            <div className={style.top_container}>
                <h1>Healthtrack</h1>
                <nav className={style.top_nav_bar}>
                    <Link>Medicos</Link>
                    <Link>Minhas Consultas</Link>
                    <Link>Configurações</Link>
                </nav>
            </div>
            <div className={style.content_container}>
                <div className={style.content_container_int}>{children}</div>
            </div>
        </div>
    )
}
