import React from "react";
import img2 from "../images/img2.JPG"
import Footer from "./Footer"

function Resume(){
    return(
        <>
        <div className="container">
        <div className="row">
                
            <h1 style={{padding:"80px"}}> Resume</h1>
            <div className = "content"> 
                <div className = "colum">
                    
                    <div className = "left_col">
                        <img className="img2" src = {img2} width="330" height="370" style = {{borderRadius:"50%"}} alt="img2"></img>
                    </div>


                    <div className = "right_col resumep">
                        <p style={{paddingTop:"80px"}}>Full stack developer was a profile I came across few months ago,and today I have no doubt saying this is something that I will enjoy working on rest of my life</p>
                        <p>I am budding Full satck developer and curious to learn all the things related to the field and may be one day conquer the field</p>
                        <p>I wish to contribute towards projects in this field and someday create technology that will make change</p>
                    </div>
                </div>

                
            
                <div className = "colum">
                    <div className = "left_col">
                       <br></br>
                       <h3 style={{paddingTop:"70px"}}>Education</h3>
                    </div>


                    <div className = "right_col">
                        <p style={{paddingTop:"90px"}}><b>School:</b>   Sardar Dastur Boy's High School,Pune Maharashtra</p>
                        <p><b>Jr collge:</b>    Saraswati Vidyalaya Unioun High School,Pune Maharashtra</p>
                        <p><b>Engineering: </b>   Parvatibai Genba Moze College Of Engineering, Pune Maharashtra</p>
                    </div>
                </div>

                <div className = "colum">
                    <div className = "left_col">
                       <br></br>
                       <h3 style={{paddingTop:"70px"}}>Skills</h3>
                    </div>


                    <div className = "right_col">
                        <p style={{paddingTop:"90px"}}>
                            <b>
                                <ul>
                                    <li>Html</li>
                                    <li>CSS</li>
                                    <li>bootstrap</li>
                                    <li>ReactJs</li>
                                    <li>NodeJs</li>
                                    <li>Express</li>
                                    <li>mongoDb</li>
                                    <li>Python</li>
                                    <li>machine Learning</li>

                                </ul>
                            </b>
                        </p>
                    </div>
                </div>


            </div>
        </div>
        </div>
        </>
    )
}

export default Resume;