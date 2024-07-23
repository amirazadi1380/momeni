import React, { useContext, useState } from 'react'
import useFetch from '../components/custoomHooks/useFetch'
import { AppContext } from '../context/ContextApi'
import { GoArrowLeft } from "react-icons/go";
import { CiCircleMore } from "react-icons/ci";
import Footer from '../components/home/Footer';
import Navbar from '../components/home/Navbar';
import News from '../components/home/News';
import { Link } from 'react-router-dom';
import Pagination from '../components/products/Pagination';
export default function Products() {
    const {products,setProducts,isLoading} = useFetch()
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(12);
    const {theme} = useContext(AppContext)
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className={` ${theme == 'light' ? 'bg-roshan text-tire duration-500 ease-in' : 'bg-tire text-roshan duration-500 ease-in'}  w-screen h-[7194px] lg:h-[2800px]`}>
        <News/>
        <Navbar/>
{isLoading ?
<div className='flex items-center justify-center min-h-screen bg-gray-100'>
<div className='spinner border-4 border-blue-800 rounded-full w-16 h-16'></div>
</div>
:
    <div className={` ${theme == 'dark'  ? 'border-none' : 'border-b'  } w-full   h-[5500px]   lg:h-[2300px] lg:pb-48  flex flex-col justify-center items-center `}>
    <div className={` ${theme == 'dark'  ? 'border-none' : 'border-t-2 '  }  w-full h-32 flex justify-around pt-10 `}>
        <div className='flex space-x-3 w-28 h-10 justify-center items-center'>
            <select name="categoryOption" className='bg-black/10 w-36 h-9 cursor-pointer outline-none' >
                <option value="all">همه</option>
                <option value="beauty">beauty</option>
                <option value="fragrances">fragrances</option>
                <option value="furniture">furniture</option>
                <option value="groceries">groceries</option>
            </select>
        </div>
        <div className='flex flex-col text-right w-72 h-28'>
            <h1>همه محصولات</h1>
        </div>
    </div>
    <div className='grid grid-cols-1 place-items-center lg:grid-cols-3 lg:gap-20  place-content-center'>
        
    {currentProducts.map(item=><div key={item.id} className={` ${theme == 'dark' ? 'border-white/20 ' : 'border-black/20 '}   rounded-xl w-80 mt-10 lg:mt-0 h-[400px]  space-y-0 border-b-[0.5px]  lg:w-80 lg:h-[420px]  flex flex-col  items-center`} >
        <div id='product' className={` ${theme == 'dark' ? 'shadow-lg shadow-slate-800': 'shadow-lg shadow-stone-500 '} mb-10 bg-white  rounded-lg hover:shadow-xl shadow-black/50 duration-200 relative w-60 h-64 flex justify-center items-center group cursor-pointer`}>
            <img src={item.images} alt="lighter" className='w-52 h-60 group-hover:scale-105 ease-in duration-200' />
            <Link to={`/products/${item.title}`} className='absolute top-0 opacity-0 text-sm w-32 h-10 bg-slate-950/90 rounded-md  group-hover:top-10  group-hover:opacity-100  duration-300 ease-in flex justify-center items-center text-white space-x-2'>
            <CiCircleMore  className='text-2xl'/>
            <span>...مشاهده</span>
            </Link>
        </div>  
        <div className='w-64 lg:w-64 flex items-end  flex-col space-y-2'>
            <h2 className='text-xl lg:text-2xl '>{item.title}</h2>
            <h3 className='text-xl lg:text-lg '>{item.category}</h3>
            <h4 className='opacity-50 text-sm'>$ {item.price}</h4>
        </div>
    </div>)}
    </div>
    
</div>
}
<Pagination
  productsPerPage={productsPerPage}
  totalProducts={products.length}
  paginate={paginate}
  currentPage={currentPage}
/>
<Footer/>
</div>
  )
}
