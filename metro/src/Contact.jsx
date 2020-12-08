import React from 'react'
import { Link } from 'react-router-dom'
import './App.css';
import  { Component } from 'react'
import axios from 'axios';



export default class Contact extends Component{

    state={
        name:'',
        email:'',
        phone:'',
        message:'',
        sent:false
    }


    //handle inputs
    handleName=(e)=>{
        this.setState({
            name:e.target.value
        })
    }

    handleEmail=(e)=>{
        this.setState({
            email:e.target.value
        })
    }

    handlePhone=(e)=>{
        this.setState({
            phone:e.target.value
        })
    }

    handleMessage=(e)=>{
        this.setState({
            message:e.target.value
        })
    }

    formSubmit=(e)=>{
        e.preventDefault();

        let data = {
            name:this.state.name,
            email:this.state.email,
            phone:this.state.phone,
            message:this.state.message,
        }

       axios.post("http://localhost:1337/form", data)
       .then(res=>{
           alert("Email sent!"); 
           this.setState({
               sent:true,
           },this.resetForm())
       })
       .catch(()=>{
           console.log('Message Not Sent');
       })
    }


//for reseting initial data

resetForm=()=>{
    this.setState({
        name:'',
        email:'',
        phone:'',
        message:'',

    })

    setTimeout(()=>{
        this.setState({
            sent:false,
        })
    },3000)
    
}    


    render(){
    return(
      //<div className="container">
      //  <h1>Hello Guys</h1><h2>Welcome to Contact Page </h2>
      //</div>
      
      <div className="form-container">
          <form onSubmit= {this.formSubmit}>
      <h1 className="mb-5">Contact Page</h1>
      <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" 
          className="form-control" 
          name="name" 
          placeholder="Enter Your Name"
          value={this.state.name}
          onChange={this.handleName}
            />
      </div>
      <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" 
          className="form-control" 
          name="email" 
          placeholder="Enter Your Email"
          value={this.state.email}
          onChange={this.handleEmail}
          required
          />

      </div>
      <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="number" 
          className="form-control" 
          name="phone"
          placeholder="Enter Your Phone Number"  
          value={this.state.phone}
          onChange={this.handlePhone}
          />
      </div>
      <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea 
                className = "form-control" 
                cols="30" 
                rows="3" 
                placeholder="Enter Your Message Here"
                value={this.state.message}
                onChange={this.handleMessage}
                />

      </div>

      <br />

      <div className={this.state.sent ?'msg msgAppear':'msg'}>
          <button className="btn btn-primary" >Submit</button>
      </div>
      </form>
 </div>
      
    )
    
}
}



