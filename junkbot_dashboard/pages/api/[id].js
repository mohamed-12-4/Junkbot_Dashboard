import { supabase } from "../../supabase"

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

    if (req.method === "GET") {
        const { id } = req.query
        
        const {data, error} = await supabase.from("Employees").select("*").eq("id", id).single()
        if (error) {
            res.status(500).json({
                error: error
            })
        }

        res.status(200).json({
            data: data,
        })
    }
}