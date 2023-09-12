import { useState } from "react"
import style from "./Style.module.css"
import ReactInputMask from "react-input-mask"

export function PasswordInput({ handleValue, value, name, label, errorMessage, placeholder }) {
    const [view, setView] = useState(true)
    const handleView = () => setView(!view)

    return (
        <div className={`${style.input_container} animate__animated ${errorMessage?.[name] && "animate__headShake"}`}>
            {label && <label htmlFor={name}>{label}</label>}
            <div className={style.input_password_container}>
                <input
                    placeholder={placeholder}
                    id={name}
                    onChange={(e) => handleValue(name, e.target.value)}
                    value={value[name]}
                    type={view ? "password" : "text"}
                    className={`${style.grey_input}  ${errorMessage?.[name] && style.error_input}`}
                />

                {view ? (
                    <svg onClick={handleView} className={style.eye_icon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                ) : (
                    <svg onClick={handleView} className={style.eye_icon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                    </svg>
                )}
            </div>
            {errorMessage?.[name] && (
                <div className={style.error_container}>
                    <svg className={style.warning_icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z"></path>
                    </svg>
                    <span className={style.error_message}>{errorMessage?.[name]}</span>
                </div>
            )}
        </div>
    )
}

export function DefaultInput({ handleValue, value, name, label, errorMessage, placeholder, maxLenght, mask }) {
    return (
        <div className={`${style.input_container} animate__animated ${errorMessage?.[name] && "animate__headShake"}`}>
            {<label htmlFor={name}>{label}</label>}
            <ReactInputMask
                mask={mask}
                maxLength={maxLenght}
                placeholder={placeholder}
                id={name}
                onChange={(e) => handleValue(name, e.target.value)}
                value={value[name]}
                type="text"
                className={`${style.grey_input} ${errorMessage?.[name] && style.error_input}`}
            />
            {errorMessage?.[name] && (
                <div className={style.error_container}>
                    <svg className={style.warning_icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z"></path>
                    </svg>
                    <span className={style.error_message}>{errorMessage?.[name]}</span>
                </div>
            )}
        </div>
    )
}
