// import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
// import {Route} from 'react-router-dom';
import SignUp from './pages/SignUp';
import dashboard from './pages/dashboard';
import Header from './component/Header'
import './component/Header.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import mainDashboard from './pages/main-dashboard';
import metadog from './pages/metadog';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}

<>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Switch>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/" component={Login} />
            
          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
          <Route path="/SignUp" component={SignUp} />
            
          <Route path="/dashboard" component={dashboard} />

          <Route path="/mainDashboard" component={mainDashboard} />

          <Route path="/metadog" component={metadog} />

          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
    </div>
  );
  
}

export default App;
