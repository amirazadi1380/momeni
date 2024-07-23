import React, { useContext } from 'react'
import Navbar from '../components/home/Navbar'
import Footer from '../components/home/Footer'
import { AppContext } from '../context/ContextApi'
import useFetch from '../components/custoomHooks/useFetch'
export default function About() {
    const {theme} = useContext(AppContext)
    
  return (
    <div className={` ${theme == 'light' ? 'bg-roshan text-tire duration-500 ease-in': 'bg-tire text-roshan duration-500 ease-in'} `}>

        <Navbar/>
        <div className='w-full h-60'>about</div>
        <Footer/>
    </div>
  )
}
