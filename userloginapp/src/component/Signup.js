import axios from "axios";
import { useState } from "react";

function Signup (){
    let [data,setData] = useState();

    const handleChange = (e)=>{
        setData({
        ...data,[e.target.name]:e.target.value

        })
    console.log(data);

    }

    async function sendData(){
        let res = await axios.post('/user',{data});
        console.log(res.data)

    }
    return(
    <>
    <div>
    <input type="text" placeholder="username" name='name' onChange={handleChange}/>
    <input type="text" placeholder="email" name='email' onChange={handleChange}/>
    <input type="text" placeholder="address" name='address' onChange={handleChange}/>
    <input type="text" placeholder="password" name='password' onChange={handleChange}/>
    <input type="text" placeholder="phone_number" name='phone_number' onChange={handleChange}/>
    <input type="text" placeholder="role_id" name='role_id' onChange={handleChange}/>
    <input type="submit" onClick={sendData}/>
    </div>
    
    </>
    
    
    )
    
    }
    
    export default Signup;