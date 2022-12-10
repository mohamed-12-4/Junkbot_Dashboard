import { useRouter } from 'next/router'

function getEmployeeByID() {
    // get the id from the route param
    const { id } = useRouter().query


  return (
    <div>{id}</div>
  )
}

export default getEmployeeByID