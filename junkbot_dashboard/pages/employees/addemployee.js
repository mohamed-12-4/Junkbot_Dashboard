import { EventNoteTwoTone, NearMeDisabledOutlined, Router } from "@mui/icons-material"
import  { supabase } from "../../supabase"
import axios from "axios"
import { useState } from "react"
import { redirect } from "next/dist/server/api-utils"
import { useRouter } from "next/router"
function add_employee() {
  /*
  name
No description
text	text	


job_title
No description
text	text	


salary
No description
bigint	int8	


age
No description
integer	int4	


joined_in
No description
date	date	


is_in_the_building
  */
  const [name, setName] = useState()
  const [job_title, setJobTitle] = useState()
  const [salary, setSalary] = useState()
  const [age, setAge] = useState()
  const [joined_in, setJoinedIn] = useState()


  const handleSubmit = async (event) => {
    event.preventDefault()

/*
    const {data} = {
      name: name,
      job_title: job_title,
      salary: salary,
      age: age,
      joined_in: joined_in
    }

    name: data.name,
      job_title: data.job_title,
      salary: data.salary,
      age: data.age,
      joined_in: data.joined_in,
      
*/
    //JSON.stringify(data)



    console.log(name, salary, age, joined_in, job_title)
  
    const {error} = await supabase.from('Employees').insert({
      name: name,
      job_title: job_title,
      salary: salary,
      age: age,
      joined_in: joined_in,
      is_in_the_building: false
    })

    if (error) {
      console.log(error)
    }

/*
    const res = await axios.post("/api/addemployee",{
      name: name
    }).then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    const resualt = res.json()

    alert(`${resualt.name}`)

    */

  }

  return (

    
    
    
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-100 dark:border-gray-100 mx-auto">
      <form className="space-y-6" onSubmit={ handleSubmit }>
        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="name">Name</label>
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="text" id="name" name="name" onChange={({ target }) => setName(target?.value)} required minLength={3}/>

        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="job_title">Job Title</label>
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="text" id="job_title" name="job_title" onChange={({ target }) => setJobTitle(target?.value)} required />

        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="Age">Age</label>
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="number" id="age" name="age" onChange={({ target }) => setAge(target?.value)} required />

        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="salary">Salary</label>
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="number" id="salary" name="salary" onChange={({ target }) => setSalary(target?.value)} required />

        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="joined_in">Joined in</label>
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="date" id="joined_in" name="joined_in" onChange={({ target }) => setJoinedIn(target?.value)} required />

        <input className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit" />
      </form>
    </div>

  )
}

export default add_employee;