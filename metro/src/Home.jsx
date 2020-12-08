import React from 'react'
import metro1 from './metro1.jpg'
import metro2 from './metro2.jpg'
import metro3 from './metro3.jpg'
import Bg from './bg22.jpg'
import Bg1 from './bg3.jpg'
import Axios from "axios";
import { useState } from "react";
import BookingCall from './Booking.js';
import history from './history.js';
import {Redirect} from 'react-router-dom';
import { useHistory } from 'react-router-dom';


function Home()  {

  let history = useHistory();

  const redirect = () => {
    history.push('/Booking')
  }


    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [searchList, setSearchList] = useState([]);

    const [trainList, setTrainList] = useState([]);

  const getTrains = () => {
    Axios.post("http://localhost:1337/trains", {
      from: from,
      to: to,
    }).then((response) => {
      console.log(response);
      setTrainList(response.data);
    });
  };

    return (
        <div className="container-fluid p-0">
            <section className="header">
                <div>
                {/* <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={metro1} alt="First slide"></img>
      <div className="carousel-caption d-none d-sm-block" style={{color:"#080002"}}>
    <h2>Beautiful</h2>
    <p>Nature is very beautiful</p>
  </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={metro2} alt="Second slide"></img>
      <div className="carousel-caption d-none d-sm-block" style={{color:"#080002"}}>
    <h2>Beautiful</h2>
    <p>Nature is very beautiful</p>
  </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={metro3} alt="Third slide"></img>
      <div className="carousel-caption d-none d-sm-block" style={{color:"#080002"}}>
    <h2>Beautiful</h2>
    <p>Nature is very beautiful</p>
  </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>*/}
                </div> 
                <div>
                <img src={Bg} style={{backgroundSize:"center",width:"100%"}}></img>                 
                </div>
                <div className='col-sm-12 mt-sm-2 pt-sm-2' style={{textAlign:"center"}}>
                <h1><strong className="text-primary">Metro Bookings</strong></h1>
                </div>
              
                <div className="container">
                <div className="input-group">
                <div className="input-group-prepend">
                <span className="input-group-text bg-primary text-light">Search Train</span>
                </div>
                <input type="text" aria-label="First name" placeholder="From" className="form-control"  onChange={(event) => {setFrom(event.target.value);}}></input>
                <input type="text" aria-label="Last name"placeholder="To" className="form-control" onChange={(event) => {setTo(event.target.value);}}></input>
                <div className="input-group-postpend">
               <span><button type="button" class="btn btn-outline-primary" onClick={() => {  getTrains(); }}>Search</button></span>
                </div>
                </div>
                </div>
                {/* <div className="container bg-primary my-3 p-1">
                <div className='col-sm-12 mt-sm-2 pt-sm-2' style={{textAlign:"center"}}>
                <h1><strong className="text-white">Train booking</strong></h1>
                </div>
                </div> */}
                <div className="container">
                <table className="table mt-3"> 
                <thead className="table-dark">
                  <tr>
                    <th>#</th>
                    <th>Railway Number</th>
                    <th>Railway Route</th>
                    <th>Booking</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>C1589D</td>
                    <td>Hadapsar-Shivaji Nagar</td>
                    <td><button type="button" class="btn btn-outline-secondary btn-md">Details</button></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>C1589E</td>
                    <td> Pimpri Chinchwad Municipal Corporation (PCMC) – Swargate</td>
                    <td><button type="button" class="btn btn-outline-secondary btn-md">Details</button></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>C1589F</td>
                    <td>Vanaz – Ramwadi</td>
                    <td><button type="button" class="btn btn-outline-secondary btn-md">Details</button></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>C1589G</td>
                    <td> Hinjawadi – Civil Court</td>
                    <td><button type="button" class="btn btn-outline-secondary btn-md">Details</button></td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>C1589H</td>
                    <td>Swargate – Katraj</td>
                    <td><button type="button" class="btn btn-outline-secondary btn-md">Details</button></td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>C1589I</td>
                    <td>Shivaji Nagar – Kadam Wakwasti</td>
                    <td><button type="button" class="btn btn-outline-secondary btn-md">Details</button></td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>C1589J</td>
                    <td> Swargate – Pul Gate</td>
                    <td><button type="button" class="btn btn-outline-secondary btn-md">Details</button></td>
                  </tr>
                </tbody>

                </table>

                
                </div>
                <div className="jumbotron bg-light" style={{ textAlign:"center",marginTop:"20px"}}>
                 <h1>Train Schedule</h1>
                 { trainList.map((val, key) => {
                    return <div style={{width:"1200px", height:"auto", border:"1px solid black", marginTop:"10px",margin:"120px", display:"flex", padding:"10px",textAlign:"center",color:"red", background:"-webkit-gradient(linear, left top, right top, from(#f64f59), color-stop(50%, #c471ed), color-stop(100%, #12c2e9))"}}>
                      <h4 style={{margin:"20px"}}>Train No: {val.Train_No}</h4>
                      <h4 style={{margin:"20px"}}>Train Name: {val.Train_Name}</h4>
                      <h4 style={{margin:"20px"}}>Station No: {val.Station_No}</h4>
                      <h4 style={{margin:"20px"}}>Station Name: {val.Station_Name}</h4>
                      <h4 style={{margin:"20px"}}>Arrival Time: {val.Arrival_Time}</h4>
                      <h4 style={{margin:"20px"}}>Departure Time: {val.Departure_Time}</h4>
                      <h4 style={{margin:"20px"}}>Date:<br></br>{val.Date}</h4>
                      <button type="button" value="Book" onClick= {redirect} style={{border:"1px solid red"}}><b>Book</b></button>
                      </div>;
                  })}
                

                </div>

               
            </section>
        </div>
    )
}

export default Home;
