import style from "./Style.module.css"

export function SideBarDoctor({ pacientData }) {
    return (
        <div className={style.main_container}>
            <div className={style.top_container}>
                <div className={style.icon_container}>
                    <h1>G</h1>
                </div>
                <hr />
                <div className={style.options_container}>
                    <div>
                        <svg className={style.icon_active} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M2 11H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V11ZM17 3H21C21.5523 3 22 3.44772 22 4V9H2V4C2 3.44772 2.44772 3 3 3H7V1H9V3H15V1H17V3Z"></path>
                        </svg>
                        <label className={style.label_active} htmlFor="">
                            Agendamentos
                        </label>
                    </div>
                    <div>
                        <svg className={style.icon_inactive} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M12 10C14.2091 10 16 8.20914 16 6 16 3.79086 14.2091 2 12 2 9.79086 2 8 3.79086 8 6 8 8.20914 9.79086 10 12 10ZM5.5 13C6.88071 13 8 11.8807 8 10.5 8 9.11929 6.88071 8 5.5 8 4.11929 8 3 9.11929 3 10.5 3 11.8807 4.11929 13 5.5 13ZM21 10.5C21 11.8807 19.8807 13 18.5 13 17.1193 13 16 11.8807 16 10.5 16 9.11929 17.1193 8 18.5 8 19.8807 8 21 9.11929 21 10.5ZM12 11C14.7614 11 17 13.2386 17 16V22H7V16C7 13.2386 9.23858 11 12 11ZM5 15.9999C5 15.307 5.10067 14.6376 5.28818 14.0056L5.11864 14.0204C3.36503 14.2104 2 15.6958 2 17.4999V21.9999H5V15.9999ZM22 21.9999V17.4999C22 15.6378 20.5459 14.1153 18.7118 14.0056 18.8993 14.6376 19 15.307 19 15.9999V21.9999H22Z"></path>
                        </svg>
                        <label htmlFor="">Pacientes</label>
                    </div>
                    <div>
                        <svg className={style.icon_inactive} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M14.1213 10.4796C13.7308 10.0891 13.0976 10.0891 12.7071 10.4796L12 11.1868C11.2189 11.9678 9.95259 11.9678 9.17154 11.1868C8.39049 10.4057 8.39049 9.13937 9.17154 8.35832L14.8022 2.72617C16.9061 2.25022 19.2008 2.83124 20.8388 4.46924C23.2582 6.8886 23.3716 10.7407 21.1792 13.2944L19.071 15.4294L14.1213 10.4796ZM3.16113 4.46924C5.33452 2.29584 8.66411 1.98332 11.17 3.53165L7.75732 6.94411C6.19523 8.50621 6.19523 11.0389 7.75732 12.601C9.27209 14.1157 11.6995 14.1616 13.2695 12.7387L13.4142 12.601L17.6568 16.8436L13.4142 21.0862C12.6331 21.8673 11.3668 21.8673 10.5858 21.0862L3.16113 13.6616C0.622722 11.1232 0.622722 7.00764 3.16113 4.46924Z"></path>
                        </svg>
                        <label htmlFor="">Servicos</label>
                    </div>
                </div>
                <hr />
            </div>
            <div className={style.options_container}>
                <div>
                    <svg className={style.icon_settings} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M8.68735 4.00008L11.294 1.39348C11.6845 1.00295 12.3176 1.00295 12.7082 1.39348L15.3148 4.00008H19.0011C19.5533 4.00008 20.0011 4.4478 20.0011 5.00008V8.68637L22.6077 11.293C22.9982 11.6835 22.9982 12.3167 22.6077 12.7072L20.0011 15.3138V19.0001C20.0011 19.5524 19.5533 20.0001 19.0011 20.0001H15.3148L12.7082 22.6067C12.3176 22.9972 11.6845 22.9972 11.294 22.6067L8.68735 20.0001H5.00106C4.44877 20.0001 4.00106 19.5524 4.00106 19.0001V15.3138L1.39446 12.7072C1.00393 12.3167 1.00393 11.6835 1.39446 11.293L4.00106 8.68637V5.00008C4.00106 4.4478 4.44877 4.00008 5.00106 4.00008H8.68735ZM12.0011 15.0001C13.6579 15.0001 15.0011 13.6569 15.0011 12.0001C15.0011 10.3432 13.6579 9.00008 12.0011 9.00008C10.3442 9.00008 9.00106 10.3432 9.00106 12.0001C9.00106 13.6569 10.3442 15.0001 12.0011 15.0001Z"></path>
                    </svg>
                    <label htmlFor="">Configurações</label>
                </div>
                <div>
                    <svg className={style.icon_logout} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M4 18H6V20H18V4H6V6H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V18ZM6 11H13V13H6V16L1 12L6 8V11Z"></path>
                    </svg>
                    <label style={{ color: "#F67878" }} htmlFor="">
                        Logout
                    </label>
                </div>
            </div>
        </div>
    )
}

export function SideBarPacient() {
    return (
        <div className={style.main_container}>
            <div className={style.top_container}>
                <div className={style.icon_container}>
                    <h1>G</h1>
                </div>
                <hr />
                <div className={style.options_container}>
                    <div>
                        <svg className={style.icon_active} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M2 11H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V11ZM17 3H21C21.5523 3 22 3.44772 22 4V9H2V4C2 3.44772 2.44772 3 3 3H7V1H9V3H15V1H17V3Z"></path>
                        </svg>
                        <label className={style.label_active} htmlFor="">
                            Agendamentos
                        </label>
                    </div>
                    <div>
                        <svg className={style.icon_inactive} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M12 10C14.2091 10 16 8.20914 16 6 16 3.79086 14.2091 2 12 2 9.79086 2 8 3.79086 8 6 8 8.20914 9.79086 10 12 10ZM5.5 13C6.88071 13 8 11.8807 8 10.5 8 9.11929 6.88071 8 5.5 8 4.11929 8 3 9.11929 3 10.5 3 11.8807 4.11929 13 5.5 13ZM21 10.5C21 11.8807 19.8807 13 18.5 13 17.1193 13 16 11.8807 16 10.5 16 9.11929 17.1193 8 18.5 8 19.8807 8 21 9.11929 21 10.5ZM12 11C14.7614 11 17 13.2386 17 16V22H7V16C7 13.2386 9.23858 11 12 11ZM5 15.9999C5 15.307 5.10067 14.6376 5.28818 14.0056L5.11864 14.0204C3.36503 14.2104 2 15.6958 2 17.4999V21.9999H5V15.9999ZM22 21.9999V17.4999C22 15.6378 20.5459 14.1153 18.7118 14.0056 18.8993 14.6376 19 15.307 19 15.9999V21.9999H22Z"></path>
                        </svg>
                        <label htmlFor="">Pacientes</label>
                    </div>
                    <div>
                        <svg className={style.icon_inactive} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M14.1213 10.4796C13.7308 10.0891 13.0976 10.0891 12.7071 10.4796L12 11.1868C11.2189 11.9678 9.95259 11.9678 9.17154 11.1868C8.39049 10.4057 8.39049 9.13937 9.17154 8.35832L14.8022 2.72617C16.9061 2.25022 19.2008 2.83124 20.8388 4.46924C23.2582 6.8886 23.3716 10.7407 21.1792 13.2944L19.071 15.4294L14.1213 10.4796ZM3.16113 4.46924C5.33452 2.29584 8.66411 1.98332 11.17 3.53165L7.75732 6.94411C6.19523 8.50621 6.19523 11.0389 7.75732 12.601C9.27209 14.1157 11.6995 14.1616 13.2695 12.7387L13.4142 12.601L17.6568 16.8436L13.4142 21.0862C12.6331 21.8673 11.3668 21.8673 10.5858 21.0862L3.16113 13.6616C0.622722 11.1232 0.622722 7.00764 3.16113 4.46924Z"></path>
                        </svg>
                        <label htmlFor="">Servicos</label>
                    </div>
                </div>
                <hr />
            </div>
            <div className={style.options_container}>
                <div>
                    <svg className={style.icon_settings} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M8.68735 4.00008L11.294 1.39348C11.6845 1.00295 12.3176 1.00295 12.7082 1.39348L15.3148 4.00008H19.0011C19.5533 4.00008 20.0011 4.4478 20.0011 5.00008V8.68637L22.6077 11.293C22.9982 11.6835 22.9982 12.3167 22.6077 12.7072L20.0011 15.3138V19.0001C20.0011 19.5524 19.5533 20.0001 19.0011 20.0001H15.3148L12.7082 22.6067C12.3176 22.9972 11.6845 22.9972 11.294 22.6067L8.68735 20.0001H5.00106C4.44877 20.0001 4.00106 19.5524 4.00106 19.0001V15.3138L1.39446 12.7072C1.00393 12.3167 1.00393 11.6835 1.39446 11.293L4.00106 8.68637V5.00008C4.00106 4.4478 4.44877 4.00008 5.00106 4.00008H8.68735ZM12.0011 15.0001C13.6579 15.0001 15.0011 13.6569 15.0011 12.0001C15.0011 10.3432 13.6579 9.00008 12.0011 9.00008C10.3442 9.00008 9.00106 10.3432 9.00106 12.0001C9.00106 13.6569 10.3442 15.0001 12.0011 15.0001Z"></path>
                    </svg>
                    <label htmlFor="">Configurações</label>
                </div>
                <div>
                    <svg className={style.icon_logout} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M4 18H6V20H18V4H6V6H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V18ZM6 11H13V13H6V16L1 12L6 8V11Z"></path>
                    </svg>
                    <label style={{ color: "#F67878" }} htmlFor="">
                        Logout
                    </label>
                </div>
            </div>
        </div>
    )
}
