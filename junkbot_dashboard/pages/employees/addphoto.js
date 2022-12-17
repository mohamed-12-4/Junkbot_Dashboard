import { EventNoteTwoTone, NearMeDisabledOutlined, Router } from "@mui/icons-material"
import  { supabase } from "../../supabase"
import axios from "axios"
import { useState } from "react"
import { redirect } from "next/dist/server/api-utils"
import { useRouter } from "next/router"
function AddPhoto() {
  const [image, setImage] = useState(null)
  const [id, setId] = useState(0)


  const handleSubmit = async (event) => {
    event.preventDefault()

    console.log(image)

    const {error} = await supabase.storage.from("images").upload(`public/${id}.jpeg`, image)
    if (error){
        console.log(error)
    }

  }

  return (
    
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-100 dark:border-gray-100 mx-auto">
      <form className="space-y-6" onSubmit={ handleSubmit }>
      <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="joined_in">Employee_id</label>
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="number" id="image" name="image" onChange={({ target }) => setId(target?.value)} required />

        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="joined_in">File (JPEG only)</label>
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="file" id="image" name="image" onChange={({ target }) => setImage(target?.value)} required />

        <input className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit" />
      </form>
    </div>

  )
}

export default AddPhoto;