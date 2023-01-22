import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Loginpage from "./Loginpage";
import Useraccount from "./Useraccount";
function Launchpage()
{
    return(
    <div>
        <div className="section1">
        <h3>We create those who will create the future.</h3>
        </div>
        <div className="section2">    
            
<h4>Mission</h4>
<p>Hero Vired is a learning company on a mission to not only re-imagine the way we learn, but also build a better and brighter future. We’re here to equip our learners with the knowledge, skills, and expertise they need to find success. We do this through a deeply engaged and holistic learning experience, and empower them to transform careers.
            </p>
            <h4>Vision</h4>
Hero Vired’s vision is to use modern and experiential pedagogical methods to provide holistic learning. We create highly skilled professionals not only for the present, but also for the yet-to-be created jobs of the future. Our goal is to prepare them to become the reliable first choice in a rapidly transforming digital economy.
        </div>
      
 <Loginpage></Loginpage>       

<div className="Section3">
    <h5>Contact: 1234567</h5>
    <h5>Mail id:  hello@herovired.com</h5>
    <p>Social Follow icons</p>


</div>


    </div>);
}
export default Launchpage;