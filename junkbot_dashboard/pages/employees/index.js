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
      <div className="container flex justify-center align-middle font-xl">
        <h1 className="flex justify-center font-xl">Employees</h1>
      </div>

      <br />

      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
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
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{index.name}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{index.job_title}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{index.age}</td>
                </tr>
              )
            })}
          </tbody>

          </table>


          <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-auto mb-2">
            <Link href="/employees/addemployee">
              Add Employee
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