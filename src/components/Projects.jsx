import React from "react";
import proj1 from "../images/proj1.png"
import proj2 from "../images/proj2.png"
import proj3 from "../images/proj3.jpeg"
import proj4 from "../images/proj4.jpg"

 
function Projects(){
    return(
        <>
            
           

            <div className="row justify-content-md-center project_div">
                <h1>Projects</h1>
                <div className="col-sm-6 project_div1"  >
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Covid Tracker</h5>
                            <p className="card-text">Covid cases from all over the India has been displayed here using an api in React.StateWise covid cases with last updated dates have been  displayed </p>
                            <button>see project</button>
                        </div>  
                    </div>
                </div>

                <div className="col-sm-6 project_div1">
                    <div className="card">
                        <div className="card-bod">
                            <img src={proj1} className="img-fluid rounded-start" alt="proj1"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row justify-content-md-center project_div">
                <h1></h1>
                <div className="col-sm-6 project_div1"  >
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Todo LIst</h5>
                            <p className="card-text">You can keep track of your daily chores,errands,tasks and and list it out. Once task is completed you can easily cut it out with the help of delete buuton   </p>
                            <button>see project</button>
                        </div>  
                    </div>
                </div>

                <div className="col-sm-6 project_div1">
                    <div className="card">
                        <div className="card-bod">
                            <img src={proj2} className="img-fluid rounded-start" alt="proj1"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row justify-content-md-center project_div">
                <h1></h1>
                <div className="col-sm-6 project_div1"  >
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Credit Card fraud detection</h5>
                            <p className="card-text">Credit card frauds are common around the globe and one has to extremely vigilant to keep his/her money safe from fraudsters.using Machine Learning a model has been created to help people know if there are being part of fraudulent process </p>
                            <button>see project</button>
                        </div>  
                    </div>
                </div>

                <div className="col-sm-6 project_div1">
                    <div className="card">
                        <div className="card-bod">
                            <img src={proj3} className="img-fluid rounded-start" alt="proj1"/>
                        </div>
                    </div>
                </div>
            </div>



            <div className="row justify-content-md-center project_div">
                <h1></h1>
                <div className="col-sm-6 project_div1"  >
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Human Activity detection</h5>
                            <p className="card-text">A model has been created with the help of diiferent sensor attached to diiferent parts of body which will predict what activity is being done by that person at a given time</p>
                            <button>see project</button>
                        </div>  
                    </div>
                </div>

                <div className="col-sm-6 project_div1">
                    <div className="card">
                        <div className="card-bod">
                            <img src={proj4} className="img-fluid rounded-start" alt="proj1"/>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}


export default Projects