import {useState} from 'react'
import Authentication from '../Components/Authentication';
export default function Login({setToken}){
    return(
        //Sign in with correct username/password combination
        <div>
            <h1>Login</h1>
            < Authentication buttonText={'Login'}/>
        </div>
    )
}