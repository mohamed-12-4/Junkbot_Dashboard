import { supabase } from "../../supabase"
export default function handler(req, res) {
    if (req.method === "POST"){
        const body = res?.body;
        console.log(body)

        if (!body) {
            res.status(500).json({ msg: "Invalid"})
        }

        return res.status(200).json({ name: body.data })

    }
  }
  