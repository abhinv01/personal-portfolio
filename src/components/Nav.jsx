import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { NavLink } from "react-router-dom";


function Nav() {
    return (
        <div className = "Nav-div">
            <div>
                <h1>🆎Abhinav Babar</h1>
                <p>enthusiast about <br/>Web developing / Data Science</p>
            </div>


            <div className = "Nav-link">
                <ul class="nav justify-content-end">
                    <li class="nav-item">
                        <NavLink exact activeclassName = "active_class" to = "/">
                            Home
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink exact activeclassName = "active_class" to = "/projects">
                            Projects
                        </NavLink>
                        
                    </li>
                    <li class="nav-item">
                        <NavLink exact activeclassName = "active_class" to = "/resume">
                            Resume
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink exact activeclassName = "active_class" to = "/contact">
                            Contact
                        </NavLink>      
                    </li>
                </ul>
            </div>
        </div>
  
      );
    }
  
  export default Nav;
  