import React, { Component } from 'react'
import Styles from './Common.module.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Logo from './yoga.svg'
import Register from './logo2.svg'
class Login extends Component {

  constructor(props) {      
      // const sign_in_btn = document.querySelector("#sign-in-btn");
      // const sign_up_btn = document.querySelector("#sign-up-btn");
      
      super(props);
      this.Onsignupclick = this.Onsignupclick.bind(this);
      this.Onsigninclick=this.Onsigninclick.bind(this);
    }

    Onsignupclick()
    {
        const container = document.querySelector(".container");
        container.classList.add(".signupmode");

    }

    Onsigninclick()
    {
        const container = document.querySelector(".container");
        container.classList.remove(".signupmode");
    }

  render() {
      return (
          <div>
              <script src="https://kit.fontawesome.com/64d58efce2.js" crossorigin="anonymous"></script>
              {/* <ScriptTag isHydrating={true} type="text/javascript" src="./LoginJs.js"/> */}
           <div className={Styles.container}>
          <div className={Styles.formsContainer}>
              <div className={Styles.signinSignup}>
                  <form action="" className={Styles.signinform}>
                      <h2 className={Styles.title}>Sign in</h2>
                      <div className={Styles.inputfield}>
                           <i className="fas fa-user"></i>
                          <input type="text" placeholder="Username"></input>
                      </div>
                      <div className={Styles.inputfield}>
                          <i className="fas fa-lock"></i>
                          <input type="password" placeholder="Password"></input>
                      </div>
                      <input type="submit" value="Login" className={Styles.btn}></input>
                      <p className={Styles.socialtext}>or Sign in with social platform</p>
                      <div className={Styles.socialmedia}>
                          <a href="#" className={Styles.socialicon}>
                         <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href="#" className={Styles.socialicon}>
                          <i className="fab fa-twitter"></i>
                          </a>
                          <a href="#" className={Styles.socialicon}>
                          <i className="fab fa-google"></i>
                          </a>
                          <a href="#" className={Styles.socialicon}>
                          <i className="fab fa-linkedin-in"></i>
                          </a>


                      </div>
                  </form>

                  <form action="" className={Styles.signupform}>
                      <h2 className={Styles.title}>Sign up</h2>
                      <div className={Styles.inputfield}>
                           <i className="fas fa-user"></i>
                          <input type="text" placeholder="Username"></input>
                      </div>
                      <div className={Styles.inputfield}>
                           <i className="fas fa-envelope"></i>
                          <input type="text" placeholder="Email"></input>
                      </div>
                      <div className={Styles.inputfield}>
                          <i className="fas fa-lock"></i>
                          <input type="password" placeholder="Password"></input>
                      </div>
                      <input type="submit" value="Sign up" className={Styles.btn}></input>
                      <p className={Styles.socialtext}>or Sign up with social platform</p>
                      <div className={Styles.socialmedia}>
                          <a href="#" className={Styles.socialicon}>
                         <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href="#" className={Styles.socialicon}>
                          <i className="fab fa-twitter"></i>
                          </a>
                          <a href="#" className={Styles.socialicon}>
                          <i className="fab fa-google"></i>
                          </a>
                          <a href="#" className={Styles.socialicon}>
                          <i className="fab fa-linkedin-in"></i>
                          </a>
                      </div>
                  </form>
              </div>
          </div>
          <div className={Styles.panelscontainer}>
                <div className={ [Styles.panel, Styles.leftpanel].join(' ') } >
                    <div className={Styles.content}>
                        <h3>New here?</h3>
                        <p>Please follow the following guidlines to continue</p>
                        <button className={ [Styles.btn, Styles.transparent].join(' ') } id="sign-up-btn" onClick={this.Onsignupclick}>Sign up</button>
                    </div>
                   <img src={Logo} className={Styles.image} alt="" ></img>
                </div>

                <div className={ [Styles.panel, Styles.rightpanel].join(' ') }>
                    <div className={Styles.content}>
                        <h3>One of us?</h3>
                        <p>Please follow the following guidlines to continue</p>
                        <button className={ [Styles.btn , Styles.transparent].join(' ') }id="sign-in-btn" onClick={this.Onsigninclick}>Sign in</button>
                    </div>
                   <img src={Register} className={Styles.image} alt=""></img>
                </div>
            </div>
          
      </div>
          </div>
      )
  }
}

export default Login




