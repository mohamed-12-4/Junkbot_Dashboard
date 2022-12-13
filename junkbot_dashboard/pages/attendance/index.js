import Link from "next/link";
import { supabase } from "../../supabase";
import { useState, useEffect } from "react";

export async function getStaticProps(){
  const {data, error} = await supabase.from("Attendance").select("*, Employees(*)");
  if (error) {
    console.log(error)
  }

  return {
    props: {
      data: data
    }
  }
}


function Index({ data }) {
  // const { data, error } = await supabase.from("Employees").select("*")


  return (
    <>
      
      <h1 className="flex justify-center text-2xl">Attendance</h1>

      <h1 className="text-xl text-red-600">
        Time in GMT format (grenache time zone)

      </h1>

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
              Name
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
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{index.Employees.name}</td>
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