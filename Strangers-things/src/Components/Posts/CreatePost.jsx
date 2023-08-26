import { useState } from "react"
export default function CreatePost(token){
    const [title, setTitle] = useState()
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [location, setLocation] = useState('')
    const [willDeliver, setWillDeliver] = useState(false)
    
    async function handleSubmit(e){
        e.preventDefault();
        const COHORT_NAME = '2302-ACC-ET-WEB-PT-A'
        const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`
        try {
            const response = await fetch(`${BASE_URL}/posts`, {
              method: "POST",
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer` + this.state.token
              },
              body: JSON.stringify({
                post: {
                  title: e.target.title.value,
                  description: e.target.description.value,
                  price: e.target.price.value,
                  location: e.target.location.value,
                  willDeliver: e.target.willDeliver.value,
                }
              })
            });
            const result = await response.json();
            console.log(result);

            return result
          } catch (err) {
            console.error(err);
          }
        }
        console.log('Post Created successfull');
       
    
    
    
    return(
        <form className="Formcre " onSubmit={(e)=> handleSubmit(e, title,description,price,location,willDeliver)}>
            <h1>Create A post</h1>
            <label htmlFor="title">Title</label>
            <input 
            type="text"
            id='title' 
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            />
            <label htmlFor="description">Description</label>
            <input 
            type="textArea" 
            id='description'
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            />
            <label htmlFor="price">Price</label>
            <input 
            type="text" 
            id='price'
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
            />
            <label htmlFor="location">Location</label>
            <input 
            type="text"
            id='location' 
            value={location}
            onChange={(e)=>setLocation(e.target.value)}
            />
            <label htmlFor="willDeliver">WillDeliver</label>
            <input 
            type="checkbox" 
            id='willDeliver'
            value={willDeliver}
            onChange={(e)=>setWillDeliver(e.target.value)}
            />
            <button>create Post</button>
        </form>
    )
}