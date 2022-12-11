import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://oxqhchqkglofollbtsrb.supabase.co"
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94cWhjaHFrZ2xvZm9sbGJ0c3JiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA1NzA4MjMsImV4cCI6MTk4NjE0NjgyM30.gnUbrhEHu9oqiNcvS3yCT2hIt8SOxlU7_T1fQsYGPS4"
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);