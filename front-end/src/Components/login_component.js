import React from "react";
import {useState} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Login(){
    
    const[email, setEmail] = useState()
    const[password, setPassword] = useState()
    const [error, setError] = useState("");
    const navigate = useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/login',{email,password})
        .then(result => {console.log(result)
            if(result.data === "Success"){
                navigate('/home')
            }else{
                setError(result.data)
            }
        })
        .catch(err=> {
            console.log(err);
            setError("An unexpected error occured")

        });
    }

    return(
        <body>
        <div className="main-div">
            <h2>LOGIN</h2>
            <form onSubmit={handleSubmit}>
                <input type="name" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}/>
                <button type="submit">LOGIN</button>
            </form>
            <br/>
            <p className="error">{error}</p>
            <a href="/sign-up">New User? Signup</a>
        </div>
        </body>
    )
}