import React from "react";
import img1 from "../images/img1.png";
import Footer from './Footer';
import { NavLink } from "react-router-dom";



function Home(){
    const sty = {
        textDecoration:"none",
        color:"black"
    }
    
    return(
        <>
            <div className="Home-div">
               
                        <div className = "image1">
                            <img src = {img1}  alt = "My pic"></img>
                        </div>  

                        <div className = "intro">   
                            <h1>Hello</h1>
                            <p>Looking for my opportunity to make the change<br/>The <span>Digital</span> way</p>

                            <div className="buttons">   
                                
                                    <NavLink exact activeclassName = "active_class" to = "/resume" style = {sty}>
                                        <button name = "Resume">
                                            Resume
                                        </button>
                                    </NavLink>
                                
                                    <NavLink exact activeclassName = "active_class" to = "/projects" style = {sty}>
                                        <button name = "Projects">
                                            Projects
                                        </button>
                                    </NavLink>

                                    <NavLink exact activeclassName = "active_class" to = "/contact" style = {sty}>
                                        <button name = "Contact">
                                            Contact
                                        </button>
                                    </NavLink> 
                                
                            </div>

                        </div>  
                       
                     
            </div>
            <Footer/>
        </>
    )
}

export default Home