import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function NewsUpdate() {
    const [newNews, setNewNews] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault()
        const updatedItem = {
            title: 'news',
            text: newNews
        }
        axios.post('http://localhost/max_momeni/controllers/getSetups.php',{title:'swipers'},{
            headers:{
                "Content-Type":'application/x-www-form-urlencoded'
            }
        })
        .then(res=>console.log(res.data))
    }
    return (

        <form className='bg-red-600 text-black' onSubmit={handleSubmit}>
            
            <input className='bg-black text-white' type="text" onChange={(e) => setNewNews(e.target.value)} />
            <input type="submit" value='change' />
        </form>
    )
}
