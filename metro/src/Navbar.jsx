import React from 'react'
import'./NavbarDesign.css'
import Logo from './logo.png'
import Account from './account.png'
import { NavLink } from 'react-router-dom'
function Navbar() {
    return (
    <div className="mainNav">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
      <NavLink className="navbar-brand" to="/">
      <div class="logo-image">
            <img src={Logo} className="img-fluid" height="40px" width="40px"></img>
      </div>
      </NavLink>
      <NavLink class="navbar-brand" to="/" style={{color:"#0000CD",fontWeight:"bold",fontSize:"35px",fontFamily:"-moz-initial"}}>
    Pune<span style={{color:"#ff0000",fontWeight:"bold",fontSize:"35px",fontFamily:"-moz-initial"}}>Metro</span></NavLink>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav ml-auto">
    <li className="nav-item active">
        <NavLink exact activeClassName="menu_active" className="nav-link" to="/" style={{color:"#0000CD",fontWeight:"bold",fontSize:"20px",fontFamily:"-moz-initial"}}>Home </NavLink>
      </li>
    <li className="nav-item">
      <NavLink activeClassName='menu_active' exact className="nav-link" to="/TrainRoute" style={{color:"#0000CD",fontWeight:"bold",fontSize:"20px",fontFamily:"-moz-initial"}}>Route</NavLink>
    </li>
    
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown"style={{color:" #0000CD",fontWeight:"bold",fontSize:"20px",fontFamily:"-moz-initial"}}>
       Account
      </a>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="/Cancel" to="/About" style={{color:" #0000CD",fontWeight:"bold",fontSize:"20px",fontFamily:"-moz-initial"}}>Cancel Ticket</a>
        <a className="dropdown-item" href="/Report" to="/About" style={{color:" #0000CD",fontWeight:"bold",fontSize:"20px",fontFamily:"-moz-initial"}}>Generate Report</a>

      </div>
    </li>
    <li className="nav-item">
      <NavLink activeClassName='menu_active' exact className="nav-link" to="/Contact" style={{color:" #0000CD",fontWeight:"bold",fontSize:"20px",fontFamily:"-moz-initial"}}>Contact Us</NavLink>
    </li>
    <li className="nav-item">
      <NavLink activeClassName='menu_active' exact className="nav-link" to="/About" style={{color:"#0000CD",fontWeight:"bold",fontSize:"20px",fontFamily:"-moz-initial"}}>About Us</NavLink>
    </li>
    <li className="nav-item">
      <NavLink activeClassName='menu_active' exact className="nav-link" exact to="/Login" style={{color:"#0000CD",fontWeight:"bold",fontSize:"20px",fontFamily:"-moz-initial"}}><img src={Account} width="30px" style={{marginTop: "-6px"}}></img></NavLink>
    </li>
    </ul>
  </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar
 