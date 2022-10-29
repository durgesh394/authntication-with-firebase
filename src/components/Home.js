import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import {useAuthState} from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router';
import auth from './Firebase'
const Homepage = () => {
    // const [user ,loading ,error] = useAuthState(auth);
    const [login , setlogin] = useState(true);
    const navigate  = useNavigate();

    const Signout = () =>{
        
        auth.signOut()
        setlogin(false)
        navigate("/homepage");

    }


  return (
   <>
    <div className='home-container'>
        <div>
        <h1>Welcome here...!!</h1>
       {login ? <button onClick={()=>{Signout()}}>singout</button> : <Link to="/"><button>Login</button></Link>   }
        </div>
    </div>
   </>
  )
}

export default Homepage