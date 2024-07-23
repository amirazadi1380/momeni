import React, { useState , useContext} from 'react'
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import { FaBasketShopping } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import logo from '../../assets/log.png'
import { AppContext } from '../../context/ContextApi';
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { Link } from 'react-router-dom';

gsap.registerPlugin(useGSAP);
export default function Navbar() {
    const {theme , setTheme} = useContext(AppContext)
    useGSAP(()=>{
        gsap.to('#nav_items',{opacity:1,stagger:0.2,ease:"power1.in",scrollTrigger:{
            trigger:"#nav_items"
        }})
    })
    const listItems = [{
        id: 1,
        title: "خانه",
        path: '/'
    }, {
        id: 2,
        title: "محصولات",
        items: ['محصول 1', 'محصول 2', 'محصول 3'],
        path: '/products'
    }, {
        id: 3,
        title: "درباره ما",
        path: '/about'
    }, {
        id: 4,
        title: "ارتباطات",
        path: '/contact'
    },
    ];
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
        setIsOpen((prev) => !prev)
    }
    return (
        <nav className={`  w-screen h-28 lg:h-16 flex  z-50  relative justify-between px-5 lg:justify-around items-center pt-6`}>
            <div className='w-16 h-16 lg:w-32 lg:h-32'>
                <img src={logo} alt="logo" className='w-16 h-16 lg:w-32 lg:h-32 object-cover' />
            </div>
            {
                <ul className={`${isOpen ? ' opacity-100 w-2/3  rounded-lg shadow-xl  shadow-gray-800 duration-300 ease-in overflow-hidden' : ' opacity-0 w-0  duration-300 ease-in overflow-hidden'} flex flex-col lg:opacity-100 bg-white text-black absolute right-0 top-0 h-screen   justify-center items-center space-y-20 lg:flex lg:static lg:h-28  lg:flex-row lg:w-auto lg:space-y-0 lg:bg-transparent lg:shadow-none lg:space-x-6 ${theme == 'dark' ? 'lg:text-roshan' : ''} `}>
                    {listItems.map((item,index) => <li key={item.id}  id="nav_items" className={`w-32 opacity-0 flex justify-center items-center flex-col group`}>
                        <Link to={item.path}><h4 className='cursor-pointer group-hover:opacity-80'>{item.title}</h4><div className={` ${theme == 'dark'  ? 'bg-white' : 'bg-black'  } w-0   h-[1.5px] rounded-md group-hover:w-full duration-300 ease-in `} /></Link></li>)}
                </ul>

            }
            <div className=' w-72 flex justify-between h-12 z-50 items-center lg:justify-center lg:space-x-12'>
                <div className='w-36 relative pl-5 lg:pl-0'>
                    <input type="text" className={`${theme == 'dark' ? 'border-b border-r-white/10 placeholder:text-white' :'border-b border-slate-800 '} bg-transparent w-28 placeholder:text-xs placeholder:opacity-70 placeholder:text-black outline-none  text-sm`} placeholder=' ...' />
                    <CiSearch className='absolute text-lg right-0 top-0 cursor-pointer w-10' />

                </div>
                <div className={`$ border-black/40 border-[1px] w-10 flex justify-center items-center h-10 rounded-full hover:bg-slate-700 group duration-300 `}>
                    {theme == 'light' ? <CiLight onClick={()=>setTheme('dark')} className={`w-12 text-xl cursor-pointer group-hover:text-white duration-300`} /> :<CiDark onClick={()=>setTheme('light')} className='w-12 text-xl cursor-pointer group-hover:text-white duration-300' />}
                </div>
                {isOpen ? <IoCloseOutline onClick={handleClick} className={`${theme == 'dark' ? 'text-tire lg:text-roshan' : ''} text-5xl  cursor-pointer flex lg:hidden`} /> : <HiBars3BottomRight onClick={handleClick} className='text-5xl cursor-pointer flex lg:hidden ' />}


            </div>
        </nav>
    )
}
