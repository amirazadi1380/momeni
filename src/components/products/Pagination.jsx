import React, { useContext } from 'react'
import { AppContext } from '../../context/ContextApi';

export default function Pagination({ productsPerPage, totalProducts, paginate, currentPage }) {
        const {theme} = useContext(AppContext)
          const pageNumbers = [];
      
          for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
              pageNumbers.push(i);
          }
 
    
        return (
            <nav>
                <ul cla className='w-full h-20  flex justify-center items-center space-x-10'>
                    {pageNumbers.map(number => (
                        <li key={number} className={`  ${currentPage === number ? 'bg-yellow-300' : ''} text-2xl w-12 flex justify-center items-center rounded-lg h-12 ${theme == 'dark' ? 'bg-roshan text-tire' : 'bg-tire text-roshan'} `}>
                            <button onClick={() => paginate(number)}  className='page-link'>
                                {number}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    
  
}
