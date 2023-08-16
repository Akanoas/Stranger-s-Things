import { useState } from 'react'
export default function createPost(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [willDeliver, setWillDeliver] = useState('');
    return(
        <form>
            <label htmlFor="title">Title</label>
            <input type="text" />
            <label htmlFor="description">Description</label>
            <input type="text" />
            <label htmlFor="price">Price</label>
            <input type="text" />
            <label htmlFor="location">Location</label>
            <input type="text" />
            <label htmlFor="willDeliver">WillDeliver</label>
            <input type="text" />
        </form>
    )
}