import { EventNoteTwoTone, NearMeDisabledOutlined } from "@mui/icons-material"
import { supabase } from "../../supabase"

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
  const handleSubmit = async (event) => {

    event.preventDefault()
/*
    const {data} = {
      name: event.target.name.value,
      job_title: event.target.job_title.value,
      salary: event.target.salary.value,
      age: event.target.age.value,
      joined_in: event.target.joined_in.value
    }

    name: data.name,
      job_title: data.job_title,
      salary: data.salary,
      age: data.age,
      joined_in: data.joined_in,
      
*/
    //JSON.stringify(data)



    /*
    const {error} = await supabase.from('Employees').insert({
      name: event.target.name.value,
      job_title: event.target.job_title.value,
      salary: event.target.salary.value,
      age: event.target.age.value,
      joined_in: event.target.joined_in.value,
      is_in_the_building: false
    })

    if (error) {
      console.log(error)
    }
    */

    const name = event.target.name.value;
    alert(name)

    const res = await fetch("/api/addemployee",{
      body: JSON.stringify({
        name: name,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const resualt = res.json()

    alert(`${resualt.name}`)

  }
  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required minLength={3}/>

        <label htmlFor="job_title">Job Title</label>
        <input type="text" id="job_title" name="job_title" required />

        <label htmlFor="Age">Age</label>
        <input type="number" id="age" name="age" required />

        <label htmlFor="salary">Salary</label>
        <input type="number" id="salary" name="salary" required />

        <label htmlFor="joined_in">Joined in</label>
        <input type="date" id="joined_in" name="joined_in" required />

        <input type="submit" />
      </form>
    </div>
  )
}

export default add_employee