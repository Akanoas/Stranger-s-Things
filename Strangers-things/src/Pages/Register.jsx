import { useState } from 'react'
import Authentication from '../Components/Authentication';
export default function Register({ setToken }){
   function handleSubmit(e){
    e.preventDefault();
    console.log('Register successfull');
   }
   
   
    return(
        //Sign up for an account with username and password
        <div>
            <h1>Register</h1>
            < Authentication buttonText={'Register'} handleSubmit={handleSubmit}/>
        </div>
    )
}