import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Switch ,Route, Redirect} from "react-router-dom";
import Navbar from "./Navbar"
import Home from "./Home";
import Contact from "./Contact"
// import Login from "./Login"
import TrainRoute from './TrainRoute'
import About from './About'
import Footer from "./Footer";
import Booking from "./Booking";
import Cancel from "./Cancel";
import Report from "./Report";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/TrainRoute" component={TrainRoute}></Route>
        <Route exact path="/Contact" component={Contact}></Route>
        {/* <Route exact path="/Login" component={Login}></Route> */}
        <Route exact path="/About" component={About}></Route>
        <Route exact path="/Booking" component={Booking}></Route>
        <Route exact path="/Cancel" component={Cancel}></Route>
        <Route exact path="/Report" component={Report}></Route>

        <Redirect to="/" />
     </Switch>
     <Footer />
    </div>
  );
}

export default App;
