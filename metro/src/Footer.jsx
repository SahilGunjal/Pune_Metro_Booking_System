import React from 'react'
import './FooterDesign.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faFacebook,
    faTwitter,
    faInstagram,
    faYoutube
  } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <div>
            <footer>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12 segment-one">
                            <h3>Pune Metro</h3>
                            <p>Pune Metro is a metro rail based rapid transit system under construction to serve Pune Central and the areas of Pimpri &
                                 Chinchwad. As of December 2019, the system comprises 3 lines with a total length of 54.58 km.</p>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 segment-two">
                            <h3>Pune Metro</h3>
                                <ul>
                                    <li>Event</li>
                                    <li>Support</li>
                                    <li>Hosting</li>
                                    <li>Career</li>
                                </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 segment-three">
                            <h2>Follow Us</h2>
                            <p>Please Follow us on our social media profile in order to keep updated.For more information you can visit following accounts.</p>
                                <div class="social-container">
                                <a href="https://youtu.be/S2PDXZXGp1w" className="youtube social">
                                <FontAwesomeIcon icon={faYoutube} size="2x" />
                                </a>
                                <a href="https://www.facebook.com/MetroRailPune/" className="facebook social">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                                </a> 
                                <a href="https://twitter.com/metrorailpune" className="twitter social">
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                                </a>
                                <a href="https://www.instagram.com/metrorailpune"
                                  className="instagram social">
                                 <FontAwesomeIcon icon={faInstagram} size="2x" />
                                 </a>
                                 </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 segment-four">
                            <h2>Our Newsletter</h2>
                            <p>Visit our newsletter page to get update everyday.<br />
                                <a href="https://www.punemetrorail.org/Newsletter.aspx" style={{color:"aliceblue" , fontSize:"15px"}}>Pune Metro Newsletter</a>
                            </p>
                                 <form action="">
                                     <input type="email"></input>
                                     <input type="submit" value="subscribe"></input>
                                 </form>
                        </div>
                    </div>
                </div>

            </div>
            <p className="footer-bottom-text">All rights reserved by &copy;PuneMetro.2020</p>
            </footer>
        </div>
    )
}

export default Footer
