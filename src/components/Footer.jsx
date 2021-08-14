import React from "react";
import CallIcon from '@material-ui/icons/Call';
import MailRoundedIcon from '@material-ui/icons/MailRounded';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';



function Footer(){
    return(
        <><footer className="footer">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h1>Contact</h1>
                        <CallIcon/> <p style = {{display:"inline"}}>8412831283</p><br/>
                        <MailRoundedIcon/><p style = {{display:"inline"}}>babarabhinav07@gmail.com</p>
                        
                    </div>
                    <div class="col">
                        <h1>Follow me</h1>
                        
                            <GitHubIcon/> <p style = {{display:"inline"}}>Github</p><br/>
                            <TwitterIcon/>  <p style = {{display:"inline"}}>Twitter</p><br/>
                            <LinkedInIcon/>  <p style = {{display:"inline"}}>LinkedIn</p><br/>
                        
                    </div>
                    <div class="col">
                        <h1>Links</h1>
                        <p style = {{display:"inline"}}>Home</p><br/>
                        <p style = {{display:"inline"}}>Skills</p><br/>
                        <p style = {{display:"inline"}}>Project</p><br/>
                        <p style = {{display:"inline"}}>Resume</p><br/>
                    </div>
                </div>
            </div>
            </footer> 

        </>
    )
}

export default Footer;