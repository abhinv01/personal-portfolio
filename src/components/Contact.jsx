import React from "react"

function Contact(){
    return(
        <>
        <div className="container">
        <div className="row">
                
            <h1 className="contact-head" style={{padding:"80px"}}> Contact</h1>
            <div className = "content"> 
                <div className = "colum">
                    
                    <div className = "left_col details">
                        <b>Phone no:</b>8412831283
                        <p><b>Email</b>babarabhinav07@gmail.com</p>
                    </div>


                    <div className = "right_col contact-form">
                        <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
                        <br/>
                        <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
                        <br/>
                        <input type="text" class="form-control" placeholder="Email" aria-label="Last name"/>
                        <br/>
                    <button name = "sumbit">Submit</button>
                    </div>
                </div>

                </div>
                </div>
                </div>

        </>
    )
}

export default Contact;