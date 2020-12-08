import React from 'react'
import Axios from "axios";
import { useState } from "react";

function Booking() {

  const [passengerList, setPassengerList] = useState([]);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");


  

  const addPassenger = () => {
    Axios.post("http://localhost:1337/insert", {
      name: name,
      username: username,
      email: email,
      password: password,
      age: age,
      gender: gender,
      contact: contact,
      address: address,
    })  .then((response) => {
      console.log(response);
      setPassengerList(response.data);
    });
  };

  var all_letters = /^[A-Za-z ]+$/;
	var all_numbers = /^[0-9]+$/; 

  function setName1(nm)
	{

		if(all_letters.test(nm)==false)
			document.getElementById("name").style.border="4px solid red";
		else
			document.getElementById("name").style.border="2px solid black";
	}
	function setPassword1(pass)
	{
		var regx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/;
		if(!(pass.match(regx)))     
		    document.getElementById("inputPassword4").style.border="4px solid red";
		else
			document.getElementById("inputPassword4").style.border="2px solid black";
	}
	function setContact1(con)
	{
		if(all_numbers.test(con)==false || con.length!=10)
			 document.getElementById("contact").style.border="4px solid red";
		else
			 document.getElementById("contact").style.border="2px solid black";
	}

    return (
        <div className="container">
        <form style={{border:"1px solid black", padding:"20px", marginBottom:"20px",marginTop:"20px"}}>
          <h3 className="row md-6" style={{color:"black"}}>Book your Ticket</h3>
        <div className="form-row">
        <div className="form-group col-md-6">
            <label for="name">Name</label>
            <input type="Name" className="form-control" id="name" placeholder="Name" onMouseOut={(event) => {
            setName1(event.target.value);
          }} onChange={(event) => {
            setName(event.target.value);
          }}></input>
          </div>
        <div className="form-group col-md-6">
            <label for="username">Username</label>
            <input type="Username" className="form-control" id="username" placeholder="Username" onChange={(event) => {
            setUsername(event.target.value);
          }}></input>
          </div>
          <div className="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input type="email" className="form-control" id="inputEmail4" placeholder="Email" onChange={(event) => {
            setEmail(event.target.value);
          }}></input>
          </div>
          <div className="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input type="password" className="form-control" id="inputPassword4" placeholder="Password(one special char,one upper case,1 numeric, 8-16 length)" onMouseOut={(event) => {
            setPassword1(event.target.value);
          }} onChange={(event) => {
            setPassword(event.target.value);
          }}></input>
          </div>
          <div className="form-group col-md-6">
            <label for="Age">Age</label>
            <input type="number" className="form-control" id="name" placeholder="Age(In Years)"  min="1" max="100" onChange={(event) => {
            setAge(event.target.value);
          }}></input>
          </div>
        </div>

        <label for="Gender">Gender</label>
        <div className="form-check col-md-6">
       <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="Male" onChange={(event) => {
            setGender(event.target.value);
          }}></input>
      <label className="form-check-label" for="exampleRadios1">
      Male
      </label>
     </div>
    <div className="form-check col-md-6">
    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="Female" onChange={(event) => {
            setGender(event.target.value);
          }}></input>
    <label className="form-check-label" for="exampleRadios2">
    Female
  </label>  
  </div>
    <div className="form-check col-md-6">
   <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="Other" onChange={(event) => {
            setGender(event.target.value);
          }}></input>
    <label className="form-check-label" for="exampleRadios3">
     Other
    </label>
    </div>

    <div className="form-group col-md-6">
            <label for="contact">Contact</label>
            <input type="text" className="form-control" id="contact" placeholder="10 digit number" max="10" onMouseOut={(event) => {
            setContact1(event.target.value);
          }} onChange={(event) => {
            setContact(event.target.value);
          }}>
			</input>	
      </div>

    <div className="form-group">
    <label for="inputAddress">Address</label>
  <textarea className="form-control rounded-0" id="inputAddress" rows="5" placeholder="1234 Main St Apartment, studio, or floor" onChange={(event) => {
            setAddress(event.target.value);
          }}></textarea>
  </div>
        <div className="form-group">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck"></input>
            <label className="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <button type="button" className="btn btn-primary" onClick={addPassenger}>Book Ticket</button>
      </form>
      <div className="jumbotron bg-light" style={{ textAlign:"center",marginTop:"20px"}}>
                 { passengerList.map((val, key) => {
                      return <div style={{width:"1300px", height:"auto", border:"1px solid black", marginLeft:"0px", marginBottom:"20px", display:"flex", padding:"10px",textAlign:"center", color:"red", background:"-webkit-gradient(linear, left top, right top, from(#f64f59), color-stop(50%, #c471ed), color-stop(100%, #12c2e9))"}}>
                      <h1 style={{color:"red"}}>Ticket Booked Succesfully, Enjoy Your Trip!</h1>
                      <br></br>
                      
                      <h4 style={{margin:"20px"}}>Name: {val.Name}</h4>
                      <h4 style={{margin:"20px"}}>Username: {val.User_Name}</h4>
                      <h4 style={{margin:"20px"}}>Email: {val.Email}</h4>
                      <h4 style={{margin:"20px"}}>Age: {val.Age}</h4>
                      <h4 style={{margin:"20px"}}>Train No: {val.Train_No}</h4>
                      <h4 style={{margin:"20px"}}>From: {val.From_Station}</h4>
                      <h4 style={{margin:"20px"}}>To: {val.To_Station}</h4>
      
                      
                    
                      
                      
                      
                      
                     
        
                      </div>;
                  })}
                

      </div>
      </div>
     
      
    )
}

export default Booking
