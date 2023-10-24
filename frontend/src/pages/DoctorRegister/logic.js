import { registerDoctor } from "../../data/doctor";
import { CPFValidator, emailErr } from "../../verificator/fields";

export const register = async (values, specialities) => {
    const newData = { ...values, specialities }
    const status = await registerDoctor(newData)
}


export const verifyInputs = ({ first_name, last_name, email, password, confirm_password, cpf, }) => {


    return {
        first_name: first_name.length <= 2 ? "Please insert a valid name!" : "",
        last_name: last_name.length <= 2 ? "Please insert a valid last name!" : "",
        email: emailErr(email),
        password: password.length < 10 ? "The password must be at least 10 characters long!" : "",
        confirm_password: password !== confirm_password ? "Passwords do not match!" : "",
        cpf: !CPFValidator(cpf) ? "Please insert a valid CPF!" : "",
    }
}