import { EventNoteTwoTone, NearMeDisabledOutlined } from "@mui/icons-material"
import  { supabase } from "../../supabase"
import axios from "axios"
import { useState } from "react"
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
    <div>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={({ target }) => setName(target?.value)} required minLength={3}/>

        <label htmlFor="job_title">Job Title</label>
        <input type="text" id="job_title" name="job_title" onChange={({ target }) => setJobTitle(target?.value)} required />

        <label htmlFor="Age">Age</label>
        <input type="number" id="age" name="age" onChange={({ target }) => setAge(target?.value)} required />

        <label htmlFor="salary">Salary</label>
        <input type="number" id="salary" name="salary" onChange={({ target }) => setSalary(target?.value)} required />

        <label htmlFor="joined_in">Joined in</label>
        <input type="date" id="joined_in" name="joined_in" onChange={({ target }) => setJoinedIn(target?.value)} required />

        <input type="submit" />
      </form>
    </div>
  )
}

export default add_employee