import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://oxqhchqkglofollbtsrb.supabase.co'
// load key as string
const supabaseKey = String(process.env.SUPABASE_KEY)

export const supabase = createClient(supabaseUrl, supabaseKey)