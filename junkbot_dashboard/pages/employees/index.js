import Link from "next/link";
import { supabase } from "../../supabase";
import { useState, useEffect } from "react";

function Index() {
  // const { data, error } = await supabase.from("Employees").select("*")
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelFetch = false; // to avoid race conditions on React18
    supabase
      .from("Employees")
      .select("*")
      .then((res) => {
        if (!cancelFetch) {
          setData(res.data);
          setError(res.error);
        }
      });
    return () => {
      cancelFetch = true;
    };
  }, []);

  return (
    <>
      <div className="container flex justify-center align-middle text-xl mx-auto">
        <h1 className="flex justify-center text-xl">Employees</h1>
      </div>

      <br />

      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
          <th
              scope="col"
              className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
            >
              ID
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
            >
              Job title
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
            >
              Age
            </th>
          </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {data.map((index) => {
              return (
                <tr key={index.id}>
                  <td className="px-6 py-4 text-sm font-medium text-red-900 whitespace-nowrap">
                    <Link href={`/employees/${index.id}`}>{index.id}</Link>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-blue-800 whitespace-nowrap">
                    <Link href={`/employees/${index.id}`}>{index.name}</Link>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{index.job_title}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{index.age}</td>
                </tr>
              )
            })}
          </tbody>

          </table>


          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            <Link href="/employees/addemployee">
              Add Employee
            </Link>
          </button>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            <Link href="/employees/addphoto">
              Add Image
            </Link>
          </button>
        </>
        );
}

export default Index;

/* 
{data.map((index) => {
        return <h1>{index.name}</h1>;
      })}
      
  */