import "./index.css"
import React from "react";


function HawaPortfolio(){
    return(
        <div className="details">
            <div className="title">
            <div className="introduction"><img src="/Images/Hawa.jpg" className="pictures" alt="Hawa Majid"/>
            <div className="education">
                <h2>Hawa Majid</h2>
                
           
                
                <div className="contact">
                <h2><b>Contacts</b></h2>
                    <p id="contact"><b>email:</b>     hawamajid@gmail.com
             <br></br>
             <b>LinkedIn:</b>    Hawa Majid
             <br></br>
             <b>GitHub:</b>     Hawa Majid
             <br></br>
             <b>LinkedIn:</b>  Hawa Majid
             </p>
             </div>
             
             <div className="Akirachix">
             <h2>Education</h2>
             <p >AkiraChix</p></div>
             </div>
             </div>

            
        <div id="skills">
             <div className="personal-statement">
            <h2><b>Personal Statement</b></h2>
            <p>The ongoing crisis impacting ocean ecosystems,
                 characterized by widespread pollution and habitat destruction, has become a pressing 
                 global issue. Recognizing the urgency of these challenges, Hawa is eager to leverage
                  her technological expertise to spearhead innovative solutions to address these critical
                   problems. She aims to revolutionize waste management and conservation practices by
                    developing advanced technologies to combat marine pollution effectively. Her vision
                     is to contribute to a sustainable future by utilizing technology to drive positive change in
                      environmental stewardship, ensuring a cohesive and impactful approach to safeguarding our oceans.</p></div>
                <div className="skills">

<h2>Skills</h2>


<ul id="skills">

<li>Proficient in manipulating the Document Object Model (DOM) using JavaScript to dynamically update content, handle events, and enhance user interaction on web pages.</li>
            <li>Comprehensive knowledge of the layout and structure of webpages, including HTML for accessibility, CSS for responsive design, and knowledge of the React and Next.js frameworks for creating dynamic online applications.</li>
            <li>Ability to use fetch and Axios for integrating APIs, allowing for efficient communication between the front-end and back-end of web applications.</li>
            <li>Proficient in SQL databases such as PostgreSQL and NoSQL databases, with a solid understanding of database schemas, efficient query construction, and optimization techniques.</li>
            <li>Capable of developing web applications using Django, including setting up virtual environments and managing dependencies with pip.</li>
            <li>Skill in creating forms, using them in views, form processing, and working with dynamic data using Django's template language.</li>
            <li>Knowledge of unit testing, writing and running end-to-end tests, and using testing tools in Python.</li>
            
 </ul>

 </div>
 </div>

            </div>


            
        </div>
        
    )
}
export default HawaPortfolio;