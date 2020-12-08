import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import {Jumbotron, Button} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';

function About() {
    return (

        <div className="app" style={{backgroundColor:"#ebebeb"}}>
        <div className="jumbotron" style={{margin:"20px", borderColor:"black", backgroundColor:"#ebebeb"}}>
        <b><p style={{fontFamily:"Alegreya"}}>
        Pune, the cultural and historical capital of the state of Maharashtra, known as the ‘Queen of Deccan’ due to its scenic beauty and rich natural resources.<br/><br/>The birth place of holy saint Tukaram, Capital of the greatest warrior king of all time Chhatrapati Shivaji Maharaj who established "Hindavi Swarajya", Social reformers Mahatma Jyotiba Phule, Savitribai Phule, Maharshi Karve, home of great freedom fighters like Bal Gangadhar Tilak, Agarkar and Gopal Krishna Gokhale.<br/><br/>Pune city is known in the world map because of its educational, research and development institutions, IT Parks and automobiles industry in western Maharashtra.<br/>
        <br/>
        Pune Metro project has been undertaken by MAHA Metro, a SPV (Special Purpose Vehicle) of Government of India and Government of Maharashtra. The project intends to develop world class metro stations and surrounding areas featuring the rich cultural heritage. Modern, Safe, Secured, Comfortable and an integrated public transport system for the city of Pune and Pimpri Chinchwad will enhance the lifestyle of the citizens.<br/><br/>
        
        <Carousel>
  <Carousel.Item interval={1000}>
  <Image  src={require("./puneMetro4.jpg")} className="img-responsive"  alt="Pune Metro"  height="400" style={{marginLeft:"auto", marginRight:"auto", display:"block", border:"solid", borderColor:"black", width:"50%"}}/>
  </Carousel.Item>
  <Carousel.Item interval={500}>
  <Image  src={require("./puneMetro1.jpg")} className="img-responsive"  alt="Pune Metro"  height="400" style={{marginLeft:"auto", marginRight:"auto", display:"block", border:"solid", borderColor:"black", width:"50%"}}/>
  </Carousel.Item>
  <Carousel.Item>
  <Image  src={require("./puneMetro2.jpg")} className="img-responsive"  alt="Pune Metro"  height="400" style={{marginLeft:"auto", marginRight:"auto", display:"block", border:"solid", borderColor:"black", width:"50%"}}/>

  </Carousel.Item>
<Carousel.Item>
<Image  src={require("./puneMetro3.jpg")} className="img-responsive"  alt="Pune Metro"  height="400" style={{marginLeft:"auto", marginRight:"auto", display:"block", border:"solid", borderColor:"black", width:"50%"}}/>
  </Carousel.Item>
</Carousel>
        
        <br/><br/>
        Pune Metro is an urban Mass Rapid Transit System (MRTS) with 3 lines under construction in the city of Pune, Maharashtra by Maharashtra Metro Rail Corporation Limited (Maha-Metro) and Pune Metropolitan Region Development Authority (PMRDA).<br/><br/>31.254 km Pune Metro Phase 1 project’s Detailed Project Report (DPR) with 2 metro lines and 29 stations was prepared & submitted by the Delhi Metro Rail Corporation in July 2009, revised in January 2013, August 2014, and finally once again in November 2015 to reflect current prices.<br/><br/>In addition, the Pune Metropolitan Region Development Authority is developing a 3rd line, mostly elevated, connecting Hinjewadi – Civil Court on the public–private partnership (PPP) model.<br/><br/>In September 2019, PMRDA signed a 35-year concession agreement to develop the line with a consortium of TRIL Urban Transport Private Limited (a Tata Group Company), and Siemens Project Ventures GmbH (subsidiary of Siemens Financial Services).
        <br/><br/>
        <div class="embed-responsive embed-responsive-16by9">
        <p align="center"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/jK2GA7qZBAU" width="675" height="506" frameborder="0" allowfullscreen="allowfullscreen" ></iframe></p>
        </div>
        </p></b>
        

    </div>
    </div>

        
   

    )
}

export default About
