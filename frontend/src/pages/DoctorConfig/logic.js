import { putDoctorData } from "../../data/doctor"

export const updateData = async (values, specialities) => {
    const newData = { email: values.email, specialities: specialities }
    return await putDoctorData(newData)
}