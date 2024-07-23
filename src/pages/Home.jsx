import React, { useContext } from 'react'
import Navbar from '../components/home/Navbar'
import MySwiper from '../components/home/MySwiper'
import Categories from '../components/home/Categories'
import Trending from '../components/home/Trending'
import Reasons from '../components/home/Reasons'
import News from '../components/home/News'
import { AppContext } from '../context/ContextApi'
import Footer from '../components/home/Footer'
export default function Home() {
  const {theme} = useContext(AppContext)
  return (
    <div className={` ${theme == 'light' ? 'bg-roshan text-tire duration-500 ease-in': 'bg-tire text-roshan duration-500 ease-in'} `}>
        <News/>
        <Navbar/>
        <MySwiper/>
        <Categories/>
        <Trending/>
        <Reasons/>
        <Footer/>
    </div>
  )
}
