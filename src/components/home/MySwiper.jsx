import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import lighter from '../../assets/lighter.png'
import lighter2 from '../../assets/light2.png'
import lighter3 from '../../assets/light3.png'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { AppContext } from '../../context/ContextApi';

gsap.registerPlugin(useGSAP);
const MySwiper = () => {
    const {theme} = useContext(AppContext)
    useGSAP(()=>{
        gsap.to('#swiper_items',{opacity:1,stagger:0.2,y:-5,ease:"power1.in",scrollTrigger:{
            trigger:"#swiper_items"
        }})
    })
    const itmes = [
        {
            id: 1,
            title: "فندک لایت",
            description: " یک متن واسه پر کردن توضیحات اضافه و چیز های اضافی راجع به کلای مورد نظر ",
            image: lighter
        },
        {
            id: 2,
            title: "فندک اتمی",
            description: " یک متن واسه پر کردن توضیحات اضافه و چیز های اضافی راجع به کلای مورد نظر ",
            image: lighter2
        },
        {
            id: 3,
            title: "فندک زیپو",
            description: " یک متن واسه پر کردن توضیحات اضافه و چیز های اضافی راجع به کلای مورد نظر ",
            image: lighter3
        },
    ]
    return (
        <div className="w-full h-[600px] lg:h-[400px] pt-10 pb-5 flex justify-center ">
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                modules={[Pagination, Autoplay, EffectFade]}
                className=" w-5/6  flex "
            >
                {itmes.map(item => <SwiperSlide  key={item.id}>
                    <div className="flex flex-col lg:flex-row items-center justify-around h-full p-4 shadow-lg rounded-lg">
                        <img src={item.image} alt="Slide 1" className="mb-4  w-80 rounded-lg lg:w-[500px] object-cover h-52  lg:h-[350px]" />
                        <div className='flex flex-col  w-full h-52 justify-center items-center space-y-5 lg:space-y-10 text-center'>
                            <h1 id='swiper_items' className="opacity-0  font-bold lg:text-6xl">{item.title}</h1>
                            <p id='swiper_items' className={` ${theme == 'dark' ? 'text-white' :  'text-gray-600'} opacity-0 mt-2 `}>{item.description}</p>
                            <button id='swiper_items' className={` ${theme == 'dark' ? 'bg-white text-tire hover:text-white w-10  hover:border hover:bg-tire border-white/50 hover:ease-in' :  ' hover:text-black hover:border bg-tire text-white  hover:bg-white border-black/50 hover:ease-in'} opacity-0   w-28 h-10 `}>خرید</button>
                        </div>
                    </div></SwiperSlide>)}


            </Swiper>
        </div>
    );
};

export default MySwiper;
