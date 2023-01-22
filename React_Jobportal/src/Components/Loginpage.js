import axios from "axios";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, useNavigate } from "react-router-dom";

function Loginpage()
{ 
    let [data,setData] = useState([]);
    function handleChange(e)
    {
        setData({
            ...data, [e.target.name]:e.target.value
    })
    console.log(data)
    }
    const sendData=async ()=>{
        let res = await axios.post('/login',data)
        console.log(res.data)
    }
    return(
        <div>
            <h1>Login Form</h1>
         
            <label> Enter your email address </label><br></br>
            <input type ="text" name="email" onChange={handleChange}/><br></br>
            <label> Enter your password </label><br></br>
            <input type ="password" name="password"  onChange={handleChange}/><br></br>
            <input type ="Submit" value="submit" onClick={sendData}/>
          
        </div>
    );
    }
export default Loginpage;