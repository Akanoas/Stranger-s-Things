import Authentication from '../Components/Authentication';
import { useState } from 'react';
export default function Login({setToken}){

    const [success, setSuccess] = useState(false);
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');

    
    async function handleSubmit(e){
     e.preventDefault();
     const COHORT_NAME = '2302-ACC-ET-WEB-PT-A'
     const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`
     try {
        const response = await fetch(`${BASE_URL}/users/login`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            user: {
              username: user,
              password: pwd
            }
          })
        });
        const result = await response.json();
        console.log(result);
        setSuccess (true);
        setUser('');
        setPwd('');
        setToken(result.data.token);
       return result
      } catch (err) {
        console.error(err);
      }
    }
   
    return(
        //Sign in with correct username/password combination
        <>
            {success ? (
                <section>
                    <h1>Login successfull!</h1>
                    <p>
                        <a href="http://localhost:5173/posts">Posts</a>
                        <a href="http://localhost:5173/profile">Profile</a>
                        <a href="">Messages</a>
                    
                    </p>
                </section>
            
            ) : (

            <section>
                <h1>Login</h1>
                < Authentication buttonText={'Login'} handleSubmit={handleSubmit}/>
                <p>
                    Need an Account?<br />
                    <span className="line">
                        <a href=" http://localhost:5173/register ">Sign Up</a>
                    </span>
                </p>   
            </section>
            )}
        
        </>
        
    )
}