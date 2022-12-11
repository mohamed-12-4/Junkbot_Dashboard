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
      .from("Attendance")
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
        <h1 className="flex justify-center font-xl">Attendance</h1>
      </div>

      <br />

      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
            >
              Employee ID
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
            >
              Date
            </th>
          </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {data.map((index) => {
              return (
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{index.employee_id}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{index.time}</td>
                </tr>
              )
            })}
          </tbody>

          </table>

        </>
        );
}

export default Index;

/*
{data.map((index) => {
        return <h1>{index.name}</h1>;
      })}
      
  */