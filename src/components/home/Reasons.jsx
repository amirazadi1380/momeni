import React from 'react'
import { GiCubes } from "react-icons/gi";
import bn from '../../assets/bn.jpg'
import { SiRoundcube } from "react-icons/si";
import { PiCubeFocus } from "react-icons/pi";
import { TbCubeUnfolded } from "react-icons/tb";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger)
export default function Reasons() {
    useGSAP(() => {
        gsap.to('#reasons', {
            opacity: 1, stagger: 0.3, ease: "power1.in", scrollTrigger: {
                trigger: "#reasons"
            }
        })
    })


    return (
        <div className=' h-[1500px] lg:h-[750px] w-full flex flex-col text-center lg:pt-10 pb-0'>
            <div className='space-y-5 lg:space-y-8'>
                <h1 className=' text-4xl lg:text-7xl'>چرا مکس مومنی؟</h1>
                <p className='opacity-70 text-xs lg:text-base'>یک دلیل قانع کننده برای اینکه این شرکت را انتخاب کنند بیاورید و اینجا بنویسید</p>
            </div>
            <div className='w-full h-full flex flex-col lg:flex-row justify-center lg:justify-around items-center'>

                <div className='grid grid-cols-1 w-full lg:w-1/2 place-items-center gap-10 lg:gap-20 lg:grid-cols-2 text-xs'>
                    <div id='reasons' className='opacity-0 flex justify-center items-center flex-col space-y-5 lg:space-y-5 border-b border-black/10 pb-10 lg:pb-0 '>
                        <GiCubes className='text-7xl w-20' />
                        <div className='flex flex-col justify-center items-center space-y-8'>
                            <h2>تیتر اول</h2>
                            <p>یک دلیل قانع کننده برای اینکه این شرکت را انتخاب کنند بیاورید و اینجا بنویسید</p>
                        </div>
                    </div>
                    <div id='reasons' className='opacity-0 flex justify-center items-center flex-col space-y-5 lg:space-y-5 border-b border-black/10 pb-10 lg:pb-0 '>
                        <PiCubeFocus
                            className='text-7xl w-20' />
                        <div className='flex flex-col justify-center items-center space-y-8'>
                            <h2>تیتر دوم</h2>
                            <p>یک دلیل قانع کننده برای اینکه این شرکت را انتخاب کنند بیاورید و اینجا بنویسید</p>
                        </div>
                    </div>
                    <div id='reasons' className='opacity-0 flex justify-center items-center flex-col space-y-5 lg:space-y-5 border-b border-black/10 pb-10 lg:pb-0 '>
                        <TbCubeUnfolded
                            className='text-7xl w-20' />
                        <div className='flex flex-col justify-center items-center space-y-8'>
                            <h2>تیتر سوم</h2>
                            <p>یک دلیل قانع کننده برای اینکه این شرکت را انتخاب کنند بیاورید و اینجا بنویسید</p>
                        </div>
                    </div>
                    <div id='reasons' className='opacity-0 flex justify-center items-center flex-col space-y-5 lg:space-y-5 border-b border-black/10 pb-10 lg:pb-0 '>
                        <SiRoundcube
                            className='text-7xl w-20' />
                        <div className='flex flex-col justify-center items-center space-y-8'>
                            <h2>تیتر چهارم</h2>
                            <p>یک دلیل قانع کننده برای اینکه این شرکت را انتخاب کنند بیاورید و اینجا بنویسید</p>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-[600px] rounded-xl  h-80 relative'>
                    <img id='reasons' src={bn} alt="bn" className='w-[600px] opacity-0 rounded-xl h-80 object-cover' />
                    {/* <div className='absolute right-5 top-3 text-right '>
                        <h1>نام فندک</h1>
                        <p>توضیحات لازم راجع به محصول</p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
