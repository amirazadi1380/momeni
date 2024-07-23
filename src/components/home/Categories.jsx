import React, { useContext } from 'react'
import { FaGripfire } from "react-icons/fa";
import { SiRoundcube } from "react-icons/si";
import { PiCubeFocus } from "react-icons/pi";
import { TbCubeUnfolded } from "react-icons/tb";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AppContext } from '../../context/ContextApi';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger)

export default function Categories() {

  const {theme} = useContext(AppContext)
  useGSAP(()=>{
    gsap.to('#categories',{opacity:1,stagger:0.2,ease:"power1.in",scrollTrigger:{
        trigger:"#categories"
    }})
    gsap.to('#text',{opacity:1,stagger:0.4,ease:"power1.in",scrollTrigger:{
        trigger:"#text"
    }})
    gsap.to('#category_header',{y:-30,ease:"power1.in",scrollTrigger:{
        trigger:"#category_header"
    }})
})
  return (
    <div className={` ${theme == 'dark'  ? 'border-none' : 'border-t'   } w-full h-[500px] lg:h-96  space-y-5  flex flex-col justify-center text-center items-center`}>
      <div id='category_header' className='space-y-5 mb-8' >
        <h1 id='text' className='opacity-0 text-3xl lg:text-5xl'>دسته بندی فندکت رو انتخاب کن</h1>
        <p id='text' className='opacity-0'>از بین دسته بندی ها یکی را انتخاب کن</p>
      </div>
      <div id='category_container' className='grid grid-cols-3 gap-5 lg:grid-cols-6 lg:space-x-5'>
        <div  id='categories' className=' opacity-0 border bg-black/10 hover:shadow-2xl flex-col hover:border-gray-300 shadow-slate-600 hover:duration-150 hover:ease-in w-28 h-28 flex justify-center items-center'>
          <FaGripfire className='text-7xl cursor-pointer' />
          <span>زیپو</span>
        </div>
        <div  id='categories' className=' opacity-0 border bg-black/10 hover:shadow-2xl flex-col hover:border-gray-300 shadow-slate-600 hover:duration-150 hover:ease-in w-28 h-28 flex justify-center items-center'>
          <SiRoundcube className='text-7xl cursor-pointer' />
          <span>اتمی</span>
        </div>
        <div  id='categories' className=' opacity-0 border bg-black/10 hover:shadow-2xl flex-col hover:border-gray-300 shadow-slate-600 hover:duration-150 hover:ease-in w-28 h-28 flex justify-center items-center'>
          <PiCubeFocus className='text-7xl cursor-pointer' />
          <span>لایت</span>
        </div>
        <div  id='categories' className=' opacity-0 border bg-black/10 hover:shadow-2xl flex-col hover:border-gray-300 shadow-slate-600 hover:duration-150 hover:ease-in w-28 h-28 flex justify-center items-center'>
          <TbCubeUnfolded className='text-7xl cursor-pointer' />
          <span>لوکس</span>
        </div>
        <div  id='categories' className=' opacity-0 border bg-black/10 hover:shadow-2xl flex-col hover:border-gray-300 shadow-slate-600 hover:duration-150 hover:ease-in w-28 h-28 flex justify-center items-center'>
          <FaGripfire className='text-7xl cursor-pointer' />
          <span>برند</span>
        </div>
        <div  id='categories' className=' opacity-0 border bg-black/10 hover:shadow-2xl flex-col hover:border-gray-300 shadow-slate-600 hover:duration-150 hover:ease-in w-28 h-28 flex justify-center items-center'>
          <SiRoundcube className='text-7xl cursor-pointer' />
          <span>عادی</span>
        </div>

      </div>
    </div>
  )
}
