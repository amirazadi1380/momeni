import React, { useContext, useState } from 'react'
import logo from '../../assets/log.png'
import { FaArrowRight } from "react-icons/fa6";
import {AppContext} from '../../context/ContextApi'
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
const {theme} = useContext(AppContext)
  return (
    <div className={` ${theme == 'dark' ? 'bg-black/20' : 'bg-tire/10 text-tire'}  w-full h-[1500px] grid grid-cols-1 place-items-center lg:grid-cols-4 lg:h-96`}>
      <div className='w-80 h-96 space-y-4 flex flex-col font-bold justify-center items-center'>
        <img src={logo} alt="logo" className='w-28 h-28' />
        <p>آدرس شرکت مورد نظر را بنویسید</p>
        <p className='opacity-70'>+989175065996</p>
        <p className='opacity-50'>www.azadyamyr1@gmail.com</p>
        <div className='w-64  h-16 space-y-5 flex flex-col '>
      
            <div className='w-full  items-center flex justify-center space-x-5 text-xl opacity-80'>
              <div className='w-10 h-[1.6px] bg-black opacity-20'/>
              <FaTelegramPlane className='cursor-pointer'/>
              <FaInstagram className='cursor-pointer'/>
              <FaWhatsapp className='cursor-pointer'/>
              <div className='w-10 h-[1.6px] bg-black opacity-20'/>
            </div>
        </div>
      </div>
      <div className='w-80 h-96 space-y-3 flex flex-col  justify-center items-center'>
        <h1>مجموعه</h1>
        <ul className='text-right space-y-5'>
        <li>خانه</li>
        <li>محصولات</li>
        <li>درباره ما</li>
        <li>ارتباطات</li>
        <li>ثبت نام</li>
        </ul>
      </div>
      <div className='w-80 h-96 space-y-3 flex flex-col  justify-center items-center'>
        <h2>اطلاعات</h2>
        <ul className='text-right space-y-5'>
        <li>محصولات</li>
        <li>ثبت نام</li>
        <li>درباره ما</li>
        <li>ارتباطات</li>
        <li>خانه</li>
        </ul>
      </div>
      <div className='w-80 h-96 space-y-3 flex flex-col  justify-center items-center'>
        <h2>ثبت بازخورد</h2>
        <p>متنی در جهت پر کردن پاراگراف</p>
        <div className='w-64 h-8 flex justify-center items-center'>
        <input type="text"  className='rounded-none p-2 border-2'/>
        <FaArrowRight   className='  h-auto w-8 cursor-pointer text-white bg-black' />
        </div>
      </div>

    </div>
  )
}
