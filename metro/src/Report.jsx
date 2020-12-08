import React from 'react'
import Axios from "axios";
import { useState } from "react";

function Report() {

  const [passengerList1, setPassengerList1] = useState([]);
  const [passengerList2, setPassengerList2] = useState([]);
  const [passengerList3, setPassengerList3] = useState([]);
  const [passengerList4, setPassengerList4] = useState([]);
  const [stationName, setStationName] = useState("");




  

  const query1 = () => {
    Axios.post("http://localhost:1337/report1", {
      stationName: stationName
    }).then((response) => {
      console.log(response);
      setPassengerList1(response.data);
    });
  };

  const query2 = () => {
    Axios.post("http://localhost:1337/report2", {
      stationName: stationName
    }).then((response) => {
      console.log(response);
      setPassengerList2(response.data);
    });
  };

  const query3 = () => {
    Axios.post("http://localhost:1337/report3", {
      stationName: stationName
    }).then((response) => {
      console.log(response);
      setPassengerList3(response.data);
    });
  };

  const query4 = () => {
    Axios.post("http://localhost:1337/report4", {
      stationName: stationName
    }).then((response) => {
      console.log(response);
      setPassengerList4(response.data);
    });
  };

    return (
        <div className="container">
        <form style={{border:"1px solid black", padding:"20px", marginBottom:"20px",marginTop:"20px"}}>
          <h3 className="row md-6" style={{color:"black"}}>Generate Reports</h3>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="StationName">Station Name</label>
            <input type="text" className="form-control" id="name" placeholder="Station Name"  onChange={(event) => {
            setStationName(event.target.value);
          }}></input>
          </div>
        </div>
        <button type="button" className="btn btn-primary" onClick={() => { query1(); query2(); query3(); query4();}}>Generate Report</button>
      </form>
      <div className="jumbotron bg-light" style={{ textAlign:"center",marginTop:"20px"}}>
      <h1>Passengers with ticket from {stationName} with age Less Than 25: </h1>
                 { passengerList1.map((val, key) => {
                      return <div style={{width:"1300px", height:"auto", border:"1px solid black", marginLeft:"0px", marginBottom:"20px", display:"flex", padding:"10px",textAlign:"center", color:"blue", background:"-webkit-gradient(linear, left top, right top, from(#f64f59), color-stop(50%, #c471ed), color-stop(100%, #12c2e9))"}}>
                      <table  style={{width:"1200px",border:"2px solid black"}}>
                          <thead>
                              <tr>
                                  <th>Passenger Id</th>
                                  <th>Name</th>
                                  <th>Age</th>
                                  <th>Gender</th>
                                  <th>Station From</th>
                                  <th>Station To</th>
                                  <th>Train No</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                              <td key={val.Passenger_Id}>{val.Passenger_Id}</td>
                              <td key={val.Name}>{val.Name}</td>
                              <td key={val.Age}>{val.Age}</td>
                              <td key={val.Gender}>{val.Gender}</td>
                              <td key={val.From_Station}>{val.From_Station}</td>
                              <td key={val.To_Station}>{val.To_Station}</td>
                              <td key={val.Train_No}>{val.Train_No}</td>
                              
                              </tr>
                          </tbody>
                      </table>

    
                      </div>;
                  })}

<h1>Passengers with ticket from {stationName} with age Greater Than 60: </h1>
                 { passengerList2.map((val, key) => {
                      return <div style={{width:"1300px", height:"auto", border:"1px solid black", marginLeft:"0px", marginBottom:"20px", display:"flex", padding:"10px",textAlign:"center", color:"blue", background:"-webkit-gradient(linear, left top, right top, from(#f64f59), color-stop(50%, #c471ed), color-stop(100%, #12c2e9))"}}>
                      <br></br>
                      <table  style={{width:"1200px",border:"2px solid black"}}>
                          <thead>
                              <tr>
                                  <th>Passenger Id</th>
                                  <th>Name</th>
                                  <th>Age</th>
                                  <th>Gender</th>
                                  <th>Station From</th>
                                  <th>Station To</th>
                                  <th>Train No</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                              <td key={val.Passenger_Id}>{val.Passenger_Id}</td>
                              <td key={val.Name}>{val.Name}</td>
                              <td key={val.Age}>{val.Age}</td>
                              <td key={val.Gender}>{val.Gender}</td>
                              <td key={val.From_Station}>{val.From_Station}</td>
                              <td key={val.To_Station}>{val.To_Station}</td>
                              <td key={val.Train_No}>{val.Train_No}</td>
                              
                              </tr>
                          </tbody>
                      </table>

    
                      </div>;
                  })}

<h1>Female Passengers with ticket from {stationName}: </h1>
                 { passengerList3.map((val, key) => {
                      return <div style={{width:"1300px", height:"auto", border:"1px solid black", marginLeft:"0px", marginBottom:"20px", display:"flex", padding:"10px",textAlign:"center", color:"blue", background:"-webkit-gradient(linear, left top, right top, from(#f64f59), color-stop(50%, #c471ed), color-stop(100%, #12c2e9))"}}>
                      <br></br>
                      <table  style={{width:"1200px",border:"2px solid black"}}>
                          <thead>
                              <tr>
                                  <th>Passenger Id</th>
                                  <th>Name</th>
                                  <th>Age</th>
                                  <th>Gender</th>
                                  <th>Station From</th>
                                  <th>Station To</th>
                                  <th>Train No</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                              <td key={val.Passenger_Id}>{val.Passenger_Id}</td>
                              <td key={val.Name}>{val.Name}</td>
                              <td key={val.Age}>{val.Age}</td>
                              <td key={val.Gender}>{val.Gender}</td>
                              <td key={val.From_Station}>{val.From_Station}</td>
                              <td key={val.To_Station}>{val.To_Station}</td>
                              <td key={val.Train_No}>{val.Train_No}</td>
                              
                              </tr>
                          </tbody>
                      </table>

    
                      </div>;
                  })}

<h1>Male Passengers with ticket from {stationName}:</h1>
                 { passengerList4.map((val, key) => {
                      return <div style={{width:"1300px", height:"auto", border:"1px solid black", marginLeft:"0px", marginBottom:"20px", display:"flex", padding:"10px",textAlign:"center", color:"blue", background:"-webkit-gradient(linear, left top, right top, from(#f64f59), color-stop(50%, #c471ed), color-stop(100%, #12c2e9))"}}>
                      <br></br>
                      <table  style={{width:"1200px",border:"2px solid black"}}>
                          <thead>
                              <tr>
                                  <th>Passenger Id</th>
                                  <th>Name</th>
                                  <th>Age</th>
                                  <th>Gender</th>
                                  <th>Station From</th>
                                  <th>Station To</th>
                                  <th>Train No</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                              <td key={val.Passenger_Id}>{val.Passenger_Id}</td>
                              <td key={val.Name}>{val.Name}</td>
                              <td key={val.Age}>{val.Age}</td>
                              <td key={val.Gender}>{val.Gender}</td>
                              <td key={val.From_Station}>{val.From_Station}</td>
                              <td key={val.To_Station}>{val.To_Station}</td>
                              <td key={val.Train_No}>{val.Train_No}</td>
                              
                              </tr>
                          </tbody>
                      </table>

    
                      </div>;
                  })}
                

      </div>
      </div>
     
      
    )
}

export default Report
