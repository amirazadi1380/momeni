import React, { useContext } from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { AppContext } from '../../context/ContextApi';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
export default function ContactItems() {
    useGSAP(()=>{
        gsap.to('#contact_items',{opacity:1,y:-10,stagger:0.2,ease:"power1.in"})
    })
    const{theme} = useContext(AppContext)
  return (
    <div className={`${theme == 'dark' ? 'border-none bg-tire text-roshan' : 'border-t bg-roshan text-tire'} w-full mt-20 lg:mt-0 h-[900px] lg:h-[600px]  flex flex-col justify-center items-center `}>
        <div id='contact_items' className=' w-96 opacity-0  space-y-5 text-center h-20  lg:pt-16'>
        <h1 className='lg:text-5xl font-black '>ارتباط با ما</h1>
        <p className='text-xs opacity-50'>یک توضیح دو خطی کوتاه در جهت پر کردن متن خالی</p>
        </div>
        <div className='w-96 lg:w-full pt-16 h-full grid grid-cols-1 lg:grid-cols-3 place-items-center  text-center'>
            <div id='contact_items' className=' opacity-0 w-full flex-col  items-center flex h-64 lg:space-y-5  lg:w-80 lg:h-64'>
                <IoLocationOutline className='text-5xl'/>
                <h2>آدرس</h2>
                <h4 className='opacity-50'>آدرس شرکت مورد نظر را بنیوسید</h4>
            </div>
            <div id='contact_items' className=' opacity-0 w-full flex-col  items-center flex h-64 lg:space-y-5  lg:w-80 lg:h-64'>
                <IoCallOutline className='text-5xl'/>
                <h2>شماره تماس</h2>
                <h4 className='opacity-50'>+989175065996</h4>
                <h4 className='opacity-50'>+989364124818</h4>
                </div>

            <div id='contact_items' className=' opacity-0 w-full flex-col  items-center flex h-64 lg:space-y-5  lg:w-80 lg:h-64'>
                <MdOutlineEmail className='text-5xl'/>
                <h2>ایمیل</h2>
                <h4 className='opacity-50'>www.azadyamyr1@gmail.com</h4>
                <h4 className='opacity-50'>www.amiraz2001234@yahoo.com</h4>
            </div>
        </div>
    </div>
  )
}
