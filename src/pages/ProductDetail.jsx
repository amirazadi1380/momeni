import React, { useContext } from 'react'
import { AppContext } from '../context/ContextApi'
import Navbar from '../components/home/Navbar'
import Footer from '../components/home/Footer'
import useFetch from '../components/custoomHooks/useFetch'
import { useParams } from 'react-router-dom'

export default function ProductDetail() {
    const {products} = useFetch()
    const { theme } = useContext(AppContext)
    const {title} = useParams()
    return (
        <div className={` ${theme == 'light' ? 'bg-roshan text-tire duration-500 ease-in' : 'bg-tire text-roshan duration-500 ease-in'}  w-screen h-[1460px] pt-5`}>
            <Navbar />
            <div className='w-screen h-[800px] lg:h-[1000px] pt-20 flex justify-center'>
                {products.filter(item=>item.title == title).map(item=><div key={item.id} className={`  rounded-xl w-80 mt-10  h-[400px]  space-y-0  lg:w-80 lg:h-[420px]  flex flex-col  items-center`} >
        <div  className={` mb-5 bg-white  rounded-lg hover:shadow-xl shadow-black/50 duration-200 relative w-80 lg:w-96 h-80 flex justify-center items-center group `}>
            <img src={item.images} alt="lighter" className='w-72 h-80 ' />
           
        </div>  
        <div className='w-64 lg:w-96 flex items-start  flex-col space-y-2 '>
            <h2 className='text-xl lg:text-2xl '>{item.title}</h2>
            <h3 className='text-xl lg:text-lg '>{item.category}</h3>
            <h4 className='opacity-50 text-sm'>$ {item.price}</h4>
            <p className='text-xs'>{item.description}</p>
            <button className={` ${theme == 'dark' ? 'bg-roshan text-tire' : 'bg-tire text-roshan'}  w-36 h-10 capitalize`}>add to card</button>
        </div>
    </div>)}
            </div>
            <Footer />
        </div>
    )
}
