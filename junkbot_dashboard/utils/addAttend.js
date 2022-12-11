import { supabase } from "../supabase"

export const addAttend = async (employee_id) => {
    const {data, error} = await supabase.from("Attendance").insert({
        employee_id: id,
    })

    return data, error
}