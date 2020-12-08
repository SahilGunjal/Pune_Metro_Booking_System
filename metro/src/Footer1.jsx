import React from 'react'
import './FooterDesign.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faFacebook,
    faTwitter,
    faInstagram
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
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia esse iure vero ut dignissimos omnis!
                            Ipsam tempora alias, totam minus placeat omnis aspernatur necessitatibus, repudiandae suscipit, hic eum 
                            doloremque quia?</p>
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
                            <p>Please Follow us on our social media profile in order to keep updated. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                 Illo iste itaque cupiditate eaque a earum possimus alias saepe temporibus voluptas recusandae, nostrum expedita omnis quae ab
                                consequuntur neque dolorum nemo!</p>
                                <div class="social-container">
                                <a href="https://www.youtube.com/c/jamesqquick" className="youtube social">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                                </a>
                                <a href="https://www.facebook.com/learnbuildteach/" className="facebook social">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                                </a> 
                                <a href="https://www.twitter.com/jamesqquick" className="twitter social">
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                                </a>
                                <a href="https://www.instagram.com/learnbuildteach"
                                  className="instagram social">
                                 <FontAwesomeIcon icon={faInstagram} size="2x" />
                                 </a>
                                 </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 segment-four">
                            <h2>Our Newsletter</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore debitis cupiditate reiciendis illum,
                                 modi temporibus natus accusantium unde voluptate odio aperiam deserunt mollitia, nulla, eligendi 
                                 exercitationem dolores maiores enim totam?</p>
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
