export const CPFValidator = (cpf) => {
    cpf = cpf.replace(/[^\d]/g, "")

    if (cpf.length !== 11) {
        return false
    }
    const digitosIguais = /^(\d)\1+$/g.test(cpf)
    if (digitosIguais) {
        return false
    }
    let soma = 0
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i)
    }
    const primeiroDigito = 11 - (soma % 11)

    soma = 0
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i)
    }
    const segundoDigito = 11 - (soma % 11)

    if (primeiroDigito === 10 || primeiroDigito === 11) {
        if (primeiroDigito !== parseInt(cpf.charAt(9))) {
            return false
        }
    } else {
        if (primeiroDigito !== parseInt(cpf.charAt(9))) {
            return false
        }
    }

    if (segundoDigito === 10 || segundoDigito === 11) {
        if (segundoDigito !== parseInt(cpf.charAt(10))) {
            return false
        }
    } else {
        if (segundoDigito !== parseInt(cpf.charAt(10))) {
            return false
        }
    }

    return true
}
