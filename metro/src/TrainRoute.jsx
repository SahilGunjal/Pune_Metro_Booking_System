import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import {Jumbotron, Button} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
function TrainRoute() {
    return (
        <div className="app" style={{backgroundColor:"#ebebeb"}}>
        <div className="jumbotron" style={{padding:"10px 30px"}}>
	<marquee style={{fontSize: "20px"}}>Welcome to Pune Metro !! Ongoing projects, routes, metros and many more things coming your way.</marquee>
	<div style={{padding:"10px 30px",fontSize: "28px",fontStyle: "bold",backgroundColor: "rgb(245,245,245)"}}>
		<h1>Route : Swargate - PCMC</h1>
		<h2 style={{fontStyle: "bold"}}><b>Stations along this route :</b></h2>
		<div id="boxes" style={{display: "flex",justifyContent: "space-around",alignItems: "center"}}>


			<div id="box1" style={{width:"600px"}}>
				<ul>
				<li>PCMC</li>
			 	<li>Sant Tukaram Nagar</li>
			 	<li>Bhosari</li>
			 	<li>Kasarwadi</li>
			 	<li>Phugewadi</li>
				</ul>
			</div>
			<div id="box2" style={{width:"600px"}}>
				<ul>
				<li>Dapodi</li>
			 	<li>Bopodi</li>
			 	<li>Khadki</li>
			 	<li>Range Hill</li>
			 	<li>Shivajinagar</li>
				</ul>
			</div>
			<div id="box3" style={{width:"600px"}}>
				<ul>
					<li>Civil Court</li>
					<li>Budhwar Peth</li>
					<li>Mandai</li>
					<li>Swargate</li>
				</ul>

			</div>
		</div>
	</div>
	<br/><br/>
	<hr/>
	<br/>
	<h2 style={{textAlign: "center"}}>Overview of the map</h2>
	<Image src={require("./map1.jpg")} style={{display:"block",marginRight:"auto", marginLeft:"auto", width:"1000px", height:"650px"}}/>
	<br/><br/>
	<hr/>
    </div>
    </div>
    )
}

export default TrainRoute
