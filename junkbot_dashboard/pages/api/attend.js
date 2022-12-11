import { supabase } from "../../supabase"
import { addAttend } from "../../utils/addAttend"

export default async function handler(req, res) {
    // get the body form the request 
    /*
    @param {
        body: {
            id: int8,
            date: autoprovided
        }
    }
    */
    if (req.method == "POST") {
        
        

        const body = req.body


        console.log(body)
        console.log(body.id)

        const {data, error} = await supabase.from("Attendance").insert({
            employee_id: req.body.id,
        })


        if (error) { 
            res.status(500).json({
                error: error
            })
        }

        res.status(200).json({
            msg: "Success",
            id: body.id,
            data: data
        })



        
    }
}