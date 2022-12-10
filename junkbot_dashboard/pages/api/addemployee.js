import { supabase } from "../../supabase"
export default function handler(req, res) {
    const body = res.body;

    if (!body) {
        res.status(500).json({ msg: "Invalid"})
    }

    res.status(200).json({ name: body.name })
  }
  