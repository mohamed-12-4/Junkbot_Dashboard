import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import supabase from '../supabase'
import SideNavbar from '../components/sidebar'
import Link from 'next/link'
export default function Home() {
  const client = supabase
  return (
      <div className="container flex justify-center flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1
            className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left"
          >
            Dashboard
          </h1>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left text-lg">
            It retrives data from the <span className="text-indigo-600">Raspperi PI</span> using AI
          </p>
          
        </div>


      </div>
  );
}
