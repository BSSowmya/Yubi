import React from "react";
import "./Head.css";
function Head()
{
    return(
        <div className="header">
          <div className="sec1">
           <img src="Images\HV Logo.png" alt="HV Logo"/>
          </div>
          <div className="sec2">
          <div> Dashboard</div> 
          <div> Application Profile</div> 
          <div> Applied Jobs</div> 
          <div> Activity</div> 
          <div> Job Agent</div> 
          </div>
          <div className="sec3">
          <img src="Images\Signin Logo.png" alt="Singup Logo"/>
          </div>
        
        </div>
    );
}
export default Head;