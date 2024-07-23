import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { AppContext } from '../../context/ContextApi'
import axios from 'axios'

export default function useFetch() {
    const [products,setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [errorText,setErrorText] = useState('')

    useEffect(() => {
        async function fetchMyData() {
            setIsLoading(true)
            await axios.get('https://dummyjson.com/products').then(res=>setProducts(res.data.products)).catch(e=>setErrorText(e.message))
            setIsLoading(false)
        }
        fetchMyData()
    }, [])
        return {products,setProducts,isLoading}
}
