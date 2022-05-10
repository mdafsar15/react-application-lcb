import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import { Route} from 'react-router-dom';
// import Registration from './Registration'
import "../App.css";
// import Routing from "../component/routing";
import { Link } from 'react-router-dom';

function SignUp() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
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
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}

        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
        {/* <div className="Link">
        <a href="/SignUp">Registration</a>
        </div>   */}
        </form>
    </div>
  );

  return (
    <div className="login-body">
      <div className="login-form">
        <div className="title">Sign In</div>
        {/* <Link to="/Login" style={{ textDecoration: 'none' , paddingRight: '12px'}}>Login</Link>
        <Link to="/SignUp" style={{ textDecoration: 'none' }}>SignUp</Link> */}
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        {/* <ul>
        <li> */}
          {/* <Link to="/SignUp">Registration</Link> */}
        {/* </li>
</ul> */}
      </div>


    </div>
   
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

export default SignUp;