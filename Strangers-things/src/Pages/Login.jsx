import Authentication from '../Components/Authentication';
import { useNavigate } from 'react-router-dom';
export default function Login({setToken}){


    const navigate = useNavigate();
    
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
              username: e.target.user.value ,
              password: e.target.pwd.value 
            }
          })
        });
        const result = await response.json();
        setToken(result.data.token);
        console.log(result);
        return result
      } catch (err) {
        console.error(err);
      }
     console.log('Login Success');
     navigate ('/profile');
    }
   
    return(
        //Sign in with correct username/password combination
        
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
    )
}