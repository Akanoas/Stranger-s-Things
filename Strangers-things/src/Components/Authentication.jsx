import { useState } from "react";
export default function Authentication({ buttonText, handleSubmit}){
    const[user, setUser] = useState();
    const [pwd, setPwd] = useState();
    return(
        <div>
            <form onSubmit={(e)=> handleSubmit(e, username, password)}>
                <label htmlFor="username">Username</label>
                <input 
                type="text"
                id= 'username'
                value={user}
                onChange={(e)=> setUser(e.target.value)} 
                />
                <label htmlFor="password">Password</label>
                <input 
                type="password"
                id = 'password'
                value= {pwd}
                onChange={(e)=> setPwd(e.target.value)} 
                />
                <button type="submit">{buttonText}</button>
            </form>
        </div>
    )
}