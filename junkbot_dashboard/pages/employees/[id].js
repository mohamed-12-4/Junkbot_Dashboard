import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { supabase } from '../../supabase';
import React from 'react'
import axios from 'axios';
import { data } from 'autoprefixer';
import { setRevalidateHeaders } from 'next/dist/server/send-payload';
import { DataArrayTwoTone } from '@mui/icons-material';

export async function getStaticPaths() {
  const {data, error} = await supabase.from("Employees").select("*");

  const paths = data.map(index => {
    return {
      params: {
        id: index.id.toString(),
      }
  }})

  console.log(paths)

  return {
    paths,
    fallback: "blocking",
  }


}

export async function getStaticProps(context) {
  console.log(context)
  const id = context.params.id
  console.log(id)
  const { data, error } = await supabase.from("Employees").select("*").eq("id", id).single();
  if (error) {
    console.log(error)
  }

  console.log(data)
  return {
    props: {
      data: data
    }
  }
}

export default function Id({ data }) {

   // const [data, setData] = useState([]);
   // const [error, setError] = useState(null);


// get request to api/{id} and return data

/*
  useEffect(() => {
    console.log(data)
  }, [data])
*/

  return (
    <div>
      <h1 className='text-2xl'>ID: {data.id}</h1>
      <h1 className='text-2xl'>Name: {data.name}</h1>
      <h1 className='text-2xl'>Salary: {data.salary}</h1>
      <h1 className='text-2xl'>Age: {data.age}</h1>
      <h1 className='text-2xl'>Joined Since: {data.joined_in}</h1>
    </div>
  )
}
