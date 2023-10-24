import axios from 'axios'
import config from '../config.json'


const BASE_URL = config.base_url

const URL_DOCTOR_LOGIN = `${BASE_URL}/doctor/login`
const URL_DOCTOR_INFO = `${BASE_URL}/doctor/infos`
const URL_DOCTOR_PUT = `${BASE_URL}/doctor/update`
const URL_DOCTOR_CREATE = `${BASE_URL}/doctor/create`

export const getDoctorInfo = async () => {
    try {
        const { data } = await axios.get(URL_DOCTOR_INFO, { withCredentials: true })
        return data
    } catch (err) {
        throw err
    }
}

export const putDoctorData = async (data) => {
    try {
        const { status } = await axios.put(URL_DOCTOR_PUT, { ...data }, { withCredentials: true })
        return status
    } catch ({ response }) {
        console.log();
        // eslint-disable-next-line no-throw-literal
        throw { status: response.status, data: response.data.message }
    }
}

export const loginDoctor = async (data) => {
    try {
        const { status } = await axios.post(URL_DOCTOR_LOGIN, { ...data }, { withCredentials: true })
        return status
    } catch ({ response }) {
        // eslint-disable-next-line no-throw-literal
        throw { status: response.status, data: response.data.message }
    }
}

export const registerDoctor = async (data) => {
    try {
        const { status } = await axios.post(URL_DOCTOR_CREATE, { ...data })
        return status
    } catch ({ response }) {
        // eslint-disable-next-line no-throw-literal
        throw { status: response.status, data: response.data.message }
    }
}