import React, { useState } from "react";

import {useNavigate} from "react-router";
import Records from '../db.json';
import logo from "../img/logo.jpg"
import "../component/Auth.css";


function Login(){

    const navigate = useNavigate();
    
    

    const [logger,setLogger] = useState({
        username:"",
        passwords:""
    });

    const handleChange = (event) =>{
        let name = event.target.name;
        let value = event.target.value;

        setLogger({...logger,[name]:value})
    }

    const handleSubmit = async(event)=>{
        event.preventDefault();
        const {username,passwords} = logger;
        const encode = btoa(passwords);
        console.log(encode);
        try{
             await fetch('/login',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    username,encode
                })
            })

            if(Records.map(record=>record.encode) == atob(encode)){
                window.alert("Login Successfully");
                navigate(`/home`);
            }else{
                window.alert("Invalid credentials")
            }
        }
        catch(e){
            console.log(e);
        }
    }

    return(
        <>

        <div className="Auth">
            <div className="a-left">
                <img src={logo} alt="No img" />
                <div className="Webname">
                    <h1>Pal Genie</h1>
                </div>
            
                </div>
                <div className="a-right">
                <form className="infoForm authForm" onSubmit={handleSubmit}>
                    <h3>Log In</h3>
                    
                    <div>
                        <input type="text" className="infoInput" placeholder="Username" name="username" value={logger.username} onChange={handleChange}></input>
                    </div>

                    <div>
                        <input type="password" className="infoInput" placeholder="Password" name="passwords" value={logger.passwords} onChange={handleChange}></input>
                    </div>
                    
                    <button className="button infobutton" type="submit">Login</button>
                    </form>
                    </div>

                    </div>
            
        </>
    )
}

export default Login;

