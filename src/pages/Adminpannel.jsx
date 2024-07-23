import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Adminpannel() {
    const [items, setItems] = useState([])
    const [isChanging, setIsChanging] = useState(false)
    const [selectedItem, setSelectedItem] = useState()
    const [newTitle,setNewTitle] = useState('')
    const [newPrice,setNewPrice] = useState(0)
    const [newDesc,setNewDesc] = useState('')
    
    useEffect(() => {
        const fetchMyData = async () => {
            await axios.get('http://localhost/max_momeni/Test.php').then(res => setItems(res.data))
        }
        fetchMyData()
    }, [])

    const handleChange = (id) => {
        const item = items.find(item => item.id == id);
        setSelectedItem(item)
        setNewTitle(item.title);
        setNewPrice(item.price);
        setNewDesc(item.description);
        setIsChanging(true)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const updatedItem = {
            id: selectedItem.id,
            title: newTitle,
            price: newPrice,
            description: newDesc
        };

        try {
            await axios.post('http://localhost/max_momeni/Update.php', updatedItem, {
                headers: {
                    "Content-Type": 'application/x-www-form-urlencoded'
                }
            });
            
            setItems(prevItems => prevItems.map(item => item.id === selectedItem.id ? updatedItem : item));
            
            setIsChanging(false);
            setSelectedItem(null);
        } catch (error) {
            console.error('Error updating item:', error);
        }
    };

    return (
        <div>
            {items.map(item => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <button onClick={() => handleChange(item.id)}>change</button>
                </div>
            ))}
            {isChanging && (
                <form className='bg-red-600' onSubmit={handleSubmit}>
                    <input className='bg-black text-white' type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
                    <input className='bg-black text-white' type="number" value={newPrice} onChange={(e) => setNewPrice(e.target.value)} />
                    <input className='bg-black text-white' type="text" value={newDesc} onChange={(e) => setNewDesc(e.target.value)} />
                    <button type='submit'>change</button>
                </form>
            )}
        </div>
    )
}
