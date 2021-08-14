import './App.css';
import Nav from "./components/Nav"
import Home from './components/Home';
import Projects from './components/Projects';
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import {Route, Router,Switch} from "react-router-dom";


function App() {
  return (
      <>
        
        <Switch>
          <Route exact path = "/" render={() =>
              <>
                <Nav />
                <Home />
              
              </>
            }></Route>
         
          <Route exact path = "/projects" render={() =>
              <>
                <Nav />
                <Projects/>
                <Footer/>
              </>
            }></Route>


           <Route exact path = "/contact" render={() =>
              <>
                <Nav />
                <Contact/>
                <Footer/>
              </>
            }></Route>


            <Route exact path = "/resume" render={() =>
              <>
                <Nav />
                <Resume/>
                <Footer/>
              </>
            }>
            </Route> 

        </Switch>
      </>

    );
}

export default App;
