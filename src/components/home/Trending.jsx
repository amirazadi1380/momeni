import React, { useContext } from 'react'
import lighter from '../../assets/lighter.png'
import lighter2 from '../../assets/light2.png'
import lighter3 from '../../assets/light3.png'
import lighter4 from '../../assets/light4.png'
import lighter5 from '../../assets/light5.png'
import lighter6 from '../../assets/ligh6.png'
import { GoArrowLeft } from "react-icons/go";
import { CiCircleMore } from "react-icons/ci";
import { AppContext } from '../../context/ContextApi'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger)

export default function Trending() {
    useGSAP(()=>{
        gsap.to('#product',{opacity:1,y:-10,stagger:0.2,ease:"power1.in",scrollTrigger:{
            trigger:"#product"
        }})
    })
    const {theme} = useContext(AppContext)
    const trendingProducts = [
        {
            id: 1,
            title: 'نام محصول اول',
            price: '65.35',
            image: lighter
        },
        {
            id: 2,
            title: 'نام محصول دوم',
            price: '32.10',
            image: lighter2
        },
        {
            id: 3,
            title: 'نام محصول سوم',
            price: '50.25',
            image: lighter3
        },
        {
            id: 4,
            title: 'نام محصول چهارم',
            price: '40.50',
            image: lighter4
        },
        {
            id: 5,
            title: 'نام محصول پنجم',
            price: '80.30',
            image: lighter5
        },
        {
            id: 6,
            title: 'نام محصول ششم',
            price: '430.00',
            image: lighter6
        }
    ]
    return (
        <div className={` ${theme == 'dark'  ? 'border-none' : 'border-b'  } w-full  h-[3000px] lg:h-[1000px] lg:pb-32  mt-10 flex flex-col justify-center items-center `}>
            <div className={` ${theme == 'dark'  ? 'border-none' : 'border-t-2 '  }  w-full h-40 flex justify-around pt-10`}>
                <Link to='/products'>
                <div className='flex space-x-3 w-28 h-10 justify-center items-center'>    
                    <GoArrowLeft className='text-3xl cursor-pointer'/>
                    <h3 className='opacity-30 '>همه</h3>
                </div>
                </Link>
                <div className='flex flex-col text-right w-72 h-28'>
                    <h1>محصولات پرفروش</h1>
                    <h4>اینجا زودتر باخبر میشی</h4>
                </div>
            </div>
            <div className='grid grid-cols-1 place-items-center lg:grid-cols-3 lg:gap-10  place-content-center'>
                
            {trendingProducts.map(item=><div key={item.id} className={` ${theme == 'dark' ? 'border-white/20' : 'border-black/20 '} w-80 mt-10 lg:mt-0 h-96 space-y-0 border-b-[0.5px]  lg:w-80 lg:h-[420px]  flex flex-col justify-center items-center`} >
                <div id='product' className={` ${theme == 'dark' ? 'shadow-lg shadow-slate-800': 'shadow-lg shadow-stone-500 '} bg-white opacity-0 rounded-lg hover:shadow-xl shadow-black/50 duration-200 relative w-64 h-80 flex justify-center items-center group cursor-pointer`}>
                    <img src={item.image} alt="lighter" className='w-52 h-60 group-hover:scale-105 ease-in duration-200' />
                    <button className='absolute top-0 opacity-0 text-sm w-32 h-10 bg-slate-950/90 rounded-md  group-hover:top-10  group-hover:opacity-100  duration-300 ease-in flex justify-center items-center text-white space-x-2'><CiCircleMore  className='text-2xl'/>
                    <span>...مشاهده</span></button>
                </div>  
                <div className='w-64 lg:w-64 flex items-end  flex-col space-y-2'>
                    <h2 className='text-xl lg:text-2xl '>{item.title}</h2>
                    <h4 className='opacity-50 text-sm'>$ {item.price}</h4>
                </div>
            </div>)}
            </div>
            
        </div>
    )
}
