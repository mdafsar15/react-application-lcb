import './main-dashboard.css';
import 'bootstrap/dist/css/bootstrap.css';

const mainDashboard=()=>{
return(
<div>
    <div className="container-fluid">
    <div className="d-flex justify-content-between">
        <div className="logo">
            <img src={require('../logo.jpeg')} width="80px" />
        </div>
    <div className="nav-menu">
            <nav className="breadcrumb">
                <ul className="main-list">
                    <li className="nopadding"><i className="fa fa-home"></i>
                    </li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Platform Demo</a></li>
                    <li className="active"><a href="#">Dashboard</a></li>
                </ul>
            </nav>
        </div>
        <div className="setting">
            <img className="dots" src={require('../dots-icon.png')}  width="30px"/>
            <img src={require('../user-icon.png')}  width="40px"/>
        </div>
    </div>
</div>

<div className="wrapper">
        <nav className="sidebar">
            <ul className="list-unstyled components">
                <li className="dash-item active"><a href="#">Dashboard</a></li>
                <li>
                    <a href="#">Blockchain networks</a>
                </li>                
                <li>
                    <a href="#">Blockchain nodes</a>
                </li>
                <li>
                    <a href="#">Smart contract sets</a>
                </li>
                <li>
                    <a href="#">Middleware</a>
                </li>
                <li>
                    <a href="#">Integration Tools</a>
                </li>
                <li>
                    <a href="#">Storage</a>
                </li>
                <li>
                    <a href="#">Private Keys</a>
                </li>
                <li>
                    <a href="#">Resource Costs</a>
                </li>
            </ul>
        </nav>

        <div className="content">

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <div className="heading">
                        <h4>Dashboard</h4>
                    </div>

                    <div className="collapse navbar-collapse" className="navbarSupportedContent">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                <button className="nav-button">Quickstart Guide</button>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <button className="nav-button">Manage app</button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

<div className="container">
<div className="main-module">
    <div className="row">
        <div className="col-md-4">
        <div className="card module">
            <div className="card-header">
                <div className="row">
                    <div className="menu-list">
                        <h3>Blockchain Networks</h3>
                        <h4><a href="">Details</a></h4>
                    </div>
                </div>
              </div>  
                <div className="card-body">
                    <h4 className="text-center">3</h4>
                </div>
                <div className="card-footer">
                <div className="row">
                    <div className="menu-list-bottom">
                        <h3>Errors: 0</h3>
                        <h4>Warnings: 0</h4>
                    </div>
                </div>
                </div>
            </div> 
        </div>

        <div className="col-md-4">
        <div className="card module">
            <div className="card-header">
                <div className="row">
                    <div className="menu-list">
                        <h3>Blockchain Nodes</h3>
                        <h4><a href="">Details</a></h4>
                    </div>
                </div>
              </div>  
                <div className="card-body">
                    <h4 className="text-center">3</h4>
                </div>
                <div className="card-footer">
                <div className="row">
                    <div className="menu-list-bottom">
                        <h3>Errors: 0</h3>
                        <h4>Warnings: 0</h4>
                    </div>
                </div>
                </div>
            </div> 
        </div>

        <div className="col-md-4">
        <div className="card module">
            <div className="card-header">
                <div className="row">
                    <div className="menu-list">
                        <h3>Private Keys</h3>
                        <h4><a href="">Details</a></h4>
                    </div>
                </div>
              </div>  
                <div className="card-body">
                    <h4 className="text-center">1</h4>
                </div>
                <div className="card-footer">
                <div className="row">
                    <div className="menu-list-bottom">
                        <h3>Errors: 0</h3>
                        <h4>Warnings: 0</h4>
                    </div>
                </div>
                </div>
            </div> 
        </div>
    </div>
</div>

<div className="main-module">
    <div className="row">
        <div className="col-md-4">
        <div className="card module">
            <div className="card-header">
                <div className="row">
                    <div className="menu-list">
                        <h3>Smart Contract Sets</h3>
                        <h4><a href="">Details</a></h4>
                    </div>
                </div>
              </div>  
                <div className="card-body">
                    <h4 className="text-center">4</h4>
                </div>
                <div className="card-footer">
                <div className="row">
                    <div className="menu-list-bottom">
                        <h3>Errors: 0</h3>
                        <h4 className="addcolor">Warnings: 1</h4>
                    </div>
                </div>
                </div>
            </div> 
        </div>

        <div className="col-md-4">
        <div className="card module">
            <div className="card-header">
                <div className="row">
                    <div className="menu-list">
                        <h3>Storage</h3>
                        <h4><a href="">Details</a></h4>
                    </div>
                </div>
              </div>  
                <div className="card-body">
                    <h4 className="text-center">2</h4>
                </div>
                <div className="card-footer">
                <div className="row">
                    <div className="menu-list-bottom">
                        <h3>Errors: 0</h3>
                        <h4>Warnings: 0</h4>
                    </div>
                </div>
                </div>
            </div> 
        </div>

        <div className="col-md-4">
        <div className="card module">
            <div className="card-header">
                <div className="row">
                    <div className="menu-list">
                        <h3>Middleware</h3>
                        <h4><a href="">Details</a></h4>
                    </div>
                </div>
              </div>  
                <div className="card-body">
                    <h4 className="text-center">2</h4>
                </div>
                <div className="card-footer">
                <div className="row">
                    <div className="menu-list-bottom">
                        <h3>Errors: 0</h3>
                        <h4>Warnings: 0</h4>
                    </div>
                </div>
                </div>
            </div> 
        </div>
    </div>
</div>

<div className="main-module">
    <div className="row">
        <div className="col-md-4">
        <div className="card module">
            <div className="card-header">
                <div className="row">
                    <div className="menu-list">
                        <h3>Integration Tools</h3>
                        <h4><a href="">Details</a></h4>
                    </div>
                </div>
              </div>  
                <div className="card-body">
                    <h4 className="text-center">1</h4>
                </div>
                <div className="card-footer">
                <div className="row">
                    <div className="menu-list-bottom">
                        <h3>Errors: 0</h3>
                        <h4>Warnings: 0</h4>
                    </div>
                </div>
                </div>
            </div> 
        </div>

        <div className="col-md-4">
        <div className="card module">
            <div className="card-header">
                <div className="row">
                    <div className="menu-list">
                        <h3>Total Resource Cost</h3>
                        <h4><a href="">Details</a></h4>
                    </div>
                </div>
              </div>  
                <div className="card-body last-module">
                  <div className="row">
                    <div className="menu-list-bottom-1">
                        {/* <h3 className="color-btm">Current month: <br><b> 1Jan - 1Feb,22</b></br></h3> */}
                        {/* <h2 className="color-btm">Month-to-date cost: <b> &#163; 236.79</b></h2> */}
                    </div>
                </div>
                </div>
            </div> 
        </div>

    </div>
</div>
</div>





        </div>
    </div>
</div>
)
}

export default mainDashboard;