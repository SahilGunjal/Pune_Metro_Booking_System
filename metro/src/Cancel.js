import React from 'react'
import Axios from "axios";
import { useState } from "react";

function Cancel() {

  const [passengerList, setPassengerList] = useState([]);
   const [ticketNo, setTicketNo] = useState(0);


  

  const deletePassenger = () => {
    Axios.post("http://localhost:1337/delete", {
      ticketNo: ticketNo
    }).then((response) => {
      console.log(response);
      setPassengerList(response.data);
    });
  };

    return (
        <div className="container">
        <form style={{border:"1px solid black", padding:"20px", marginBottom:"20px",marginTop:"20px"}}>
          <h3 className="row md-6" style={{color:"black"}}>Cancel your Ticket</h3>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="TicketNo">Ticket No</label>
            <input type="number" className="form-control" id="name" placeholder="TicketNo"  min="1" max="100" onChange={(event) => {
            setTicketNo(event.target.value);
          }}></input>
          </div>
        </div>
        <button type="button" className="btn btn-primary" onClick={deletePassenger}>Cancel Ticket</button>
      </form>
      <div className="jumbotron bg-light" style={{ textAlign:"center",marginTop:"20px"}}>
                 { passengerList.map((val, key) => {
                      return <div style={{width:"1300px", height:"auto", border:"1px solid black", marginLeft:"0px", marginBottom:"20px", display:"flex", padding:"10px",textAlign:"center", color:"red", background:"-webkit-gradient(linear, left top, right top, from(#f64f59), color-stop(50%, #c471ed), color-stop(100%, #12c2e9))"}}>
                      <h1 style={{color:"red"}}>Ticket Cancelled Succesfully, See you Soon!</h1>
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

export default Cancel
