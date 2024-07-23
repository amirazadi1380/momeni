import React, { useContext } from 'react'
import { LuBellRing } from "react-icons/lu";
import { AppContext } from '../../context/ContextApi';

export default function News() {
    const {theme} = useContext(AppContext)
    return (
        <div className={` ${theme == 'dark'  ? 'border-none' : 'border-b'  }  w-full opacity-70 space-x-2 h-12 flex items-center justify-center pb-3`}>
            <LuBellRing />
            <h4 className='text-base '>اینجا به روزترین خبر رو بنویس </h4>
        </div>
    )
}
