import React, { useContext } from 'react'
import Navbar from '../components/home/Navbar'
import Footer from '../components/home/Footer'
import ContactItems from '../components/contact/ContactItems'
import { AppContext } from '../context/ContextApi'

export default function Contact() {
  const { theme } = useContext(AppContext)
  return (

    <div className={` ${theme == 'light' ? 'bg-roshan text-tire duration-500 ease-in' : 'bg-tire text-roshan duration-500 ease-in'}  w-screen h-screen`}>
      <Navbar />
      <ContactItems />
      <Footer />
    </div>
  )
}
