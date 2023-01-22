import React from "react"
import "./Subheader.css"
export default function Subheader(){
    return(
        <div className="subheader">
            <div className="head1">
                <h4>Snapshots</h4>
                </div>
                <div className="sections">
                <div className="sec1a">
                     
                    <img src="Images\All Jobs.png" alt="All jobs Logo"/> 
                    <div className="sec1acol">
                    <h5>All Jobs</h5>
                    <p>100</p>
                    </div>
                 </div>
                 <div className="sec1b">
                 <img src="Images\All Jobs.png" alt="All jobs Logo"/> 
                 <div className="sec1bcol">
                    <h5>Eligible Jobs</h5>
                    <p>80</p>
                 </div>
                 </div>
                 <div className="sec1c">
                 
                 <img src="Images\All Jobs.png" alt="All jobs Logo"/> 
                 <div className="sec1ccol">
                    <h5>Applied Jobs</h5>
                    <p>50</p>
                    </div>
                 </div>
                 </div>

                 <div className="head2">
                <h4>My Applications</h4>
                </div>
                <div className="sections">
                <div className="sec1a">
                     
                    <img src="Images\All Jobs.png" alt="All jobs Logo"/> 
                    <div className="sec1acol">
                    <h5>Shortlisted</h5>
                    <p>100</p>
                    </div>
                 </div>
                 <div className="sec1b">
                 <img src="Images\All Jobs.png" alt="All jobs Logo"/> 
                 <div className="sec1bcol">
                    <h5>Interviewing</h5>
                    <p>80</p>
                 </div>
                 </div>
                 <div className="sec1c">
                 
                 <img src="Images\All Jobs.png" alt="All jobs Logo"/> 
                 <div className="sec1ccol">
                    <h5>Rejected</h5>
                    <p>50</p>
                    </div>
                 </div>
                 <div className="sec1d">
                 
                 <img src="Images\All Jobs.png" alt="All jobs Logo"/> 
                 <div className="sec1dcol">
                    <h5>Offer Received</h5>
                    <p>5</p>
                    </div>
                 </div>
                 </div>
<br></br>

                <div className="head3">
                    <h4>All Jobs</h4>
                    <input type="text" placeholder = "Title,Client,Location"></input>
                    <button name =  "Search" >Search</button>
                </div>
                <br></br>
              

                <div className="head4">
                <div class="Job">
                <span>All Jobs</span>
                <div class="Jobdropdown-content">
                <p>Job1</p>
                <p>Job2</p>
                <p>Job3</p>
                </div>
                </div>
                <div class="Ind">
                <span>Industry</span>
                <div class="Inddropdown-content">
                <p>Industry1</p>
                <p>Industry2</p>
                <p>Industry3</p>
                </div>
                </div>
                <div class="Loc">
                <span>Location</span>
                <div class="Locdropdown-content">
                <p>Location1</p>
                <p>Location2</p>
                <p>Location3</p>
                </div>
                </div>
                <div class="Type">
                <span>Job Type</span>
                <div class="Typedropdown-content">
                <p>Type1</p>
                <p>Type2</p>
                <p>Type3</p>
                </div>
                </div>

                <div class="Date">
                <span>Posted Date</span>
                <div class="Datedropdown-content">
                <p>11-01-2001</p>
                <p>21-11-2003</p>
                <p>11-1-2003</p>
                </div>
                </div>
                 
                </div>
                <div className="head5">
                  
                 <div className="head5t">
                    <h3> JPC 1692 Developer Jobs</h3>
                    <div className="head5ta">
                   <div className="head5da">
                     <img src="Images\Location.png" alt="All jobs Logo"/>
                    Mumbai, Maharashtra
                     </div>
                     <div className="head5db">
                     <img src="Images\Location.png" alt="All jobs Logo"/>
                     <p>Mumbai, Maharashtra</p>
                     </div>
                     <div className="head5dd">
                     <img src="Images\Location.png" alt="All jobs Logo"/>
                     <p>Mumbai, Maharashtra</p>
                     </div>
                     <div className="head5dd">
                     <img src="Images\Location.png" alt="All jobs Logo"/>
                     <p>Mumbai, Maharashtra</p>
                     </div>
                     </div>
                     {/* <div><img src=""alt=""></img>
                     <p>Full Time</p>
                     </div>
                     <div><img src=""alt=""></img>
                     <p>150-180$</p>
                     </div>
                     <div><img src=""alt=""></img>
                     <p>CEIPAL</p>
                     </div> */}
                      </div>
                </div>
                </div>
               
            
        
    );
}