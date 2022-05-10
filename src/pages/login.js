import React, { useState , Component} from "react";
import "../App.css";
// import Routing from "../component/routing";
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { useNavigate } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// import {withRouter} from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
// import axios from 'axios'

// import { Redirect } from 'react-router-dom'
// import { Route } from "react-router-dom/cjs/react-router-dom.min";
// import { useHistory } from 'react-router-dom';


function Login() {
  // React States

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  // const database = [
  //   {
  //     username: "user1",
  //     password: "pass1"
  //   },
  //   {
  //     username: "user2",
  //     password: "pass2"
  //   }
  // ];

  const errors = {
    // uname: "invalid username",
    // pass: "invalid password"
    message:'Invalid credentials'
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
          <li>
            
          <input type="text" id="username" placeholder="Username" name="uname" required />
          {/* {renderErrorMessage("uname")} */}
          </li>
          <li>
          {/* <label>USERNAME </label> */}
          <input type="password" id="password" placeholder="Password" name="pass" required />
          {/* {renderErrorMessage("pass")} */}
          </li>
          <div className="button-container">
          <input type="submit" onClick= {API} value = "Sign In"/>
          </div>
          <div className="account-row">
          <p><a href="#">Create a new account?</a></p>
          </div>
        {/* </div> */}
        {/* <div className="input-container">
          <label>PASSWORD </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div> */}
  
        </form>
    </div>
  );

  return (
    // <div className="login-body">
      <div className="login-body">
      <div className="login-form">
        {/* <div className="title">Login</div> */}
<h1>Sign In</h1>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      
        {/* <div className="linkTag">
          <Link to="/SignUp" style={{ textDecoration: 'none'}}>Sign Up</Link>
       </div> */}
      </div>
      </div>

   
  );
}



const API = ()=>{
var uname;
// const navigate = useNavigate();
// const history = useHistory()

var uname = document.getElementById('username').value;
var pass = document.getElementById('password').value
  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

var urlencoded = new URLSearchParams();
urlencoded.append("client_id", "SystemAuth");
urlencoded.append("username", uname);
urlencoded.append("password", pass);
urlencoded.append("grant_type", "password");
urlencoded.append("client_secret", "KPPsWmvEAU49Ktk1BSzeT12pP0f3Oemn");
urlencoded.append("scope", "openid");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};
// axios
fetch("http://192.168.0.222:32041/realms/Integrand/protocol/openid-connect/token", requestOptions)
  .then(responses => {
    responses.json()
    console.log(responses.status)
    if(responses.status == 200){
        window.location.href = '/mainDashboard';
    }
  }

  )
  
  .then(result => console.log(result))
  
  .catch(error => console.log('error', error));
  
}

// function newMethod(){
//   return <Redirect to="/mainDashboard" />

// }

export default Login;