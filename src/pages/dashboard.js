// import { Link } from 'react-router-dom';
import React from "react";
// import './dashboard.css';
// import './Dashboard-Header.css';
import './dashboard.css';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';

const dashboard = () =>{
    return (
    // <Link to="/SignUp">Registration</Link>
//     <div className="header">
//   <a href="#default" className="logo">CompanyLogo</a>
//   <div className="header-right">
//     <a className="active" href="#home">Home</a>
//     <a href="#contact">Contact</a>
//     <a href="#about">About</a>
//   </div>
// </div>
<nav className="navbar ab-all">

    {/* <h5>Low Blockchain Code</h5> */}
    {/* <img src={'./logo.jpeg'} alt="Logo"/> */}
    <img className="Image-logo" src={require('../logo.jpeg')} />
    
<div className="header-row">
<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic1">
    Platform
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
  </Dropdown>
  </div>

  <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic2">
    Pricing
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
  </Dropdown>
  <Dropdown>

  <Dropdown.Toggle variant="success" id="dropdown-basic3">
    Use Case
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
  </Dropdown>

  <Dropdown>

<Dropdown.Toggle variant="success" id="dropdown-basic3">
  Partners
</Dropdown.Toggle>

<Dropdown.Menu>
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
<Dropdown>

  <Dropdown.Toggle variant="success" id="dropdown-basic3">
    Company
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
  </Dropdown>
  
<div className="page-center">
<div className="advance-banner-bg">
    <h1>
    <strong>
        Deliver blockchain applications 
    <br />
    incredibly fast with low-code
    </strong>

    </h1>

    <h2>With our ready-to-use tools you can bring your dApp to production in weeks!</h2>
</div>
</div>

<img className = "settlemint" src={require('../SettleMint-lowcode-blockchain.png')} />

</nav>
    )

};

export default dashboard;