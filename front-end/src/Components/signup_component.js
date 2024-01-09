import React from "react";
import {useState} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Signup(){
    const[name, setName] = useState()
    const[email, setEmail] = useState()
    const[password, setPassword] = useState()
    const[repassword, setRePassword] = useState()
    const[error, setError] = useState()
    const navigate = useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        if (password != repassword){
            setError("Passwords do not match")
        }else{
        axios.post('http://localhost:3001/sign-up',{name,email,password})
        .then(result => {console.log(result)
            navigate('/login')
        })
        .catch(err=> console.log(err))
    }}
    
    return(
        <body>
        <div className="main-div">
            <h2>SIGNUP</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
                <input type="text" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}/>
                <input type="password" placeholder="Re-Enter password" onChange={(e)=>setRePassword(e.target.value)}/>
                <button type="submit">Signup</button>
            </form>
            <br/>
           
            <p className="error">{error}</p>
            <a href="/login">Already Registered?</a>
        </div>
        </body>
    )
}