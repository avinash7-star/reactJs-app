import React, { Component } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute'

// css
import './assets/main.css';


// import  Login  from "./pages/login/Login";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const Layout = React.lazy(() => import('./containers/Layout'));

// Pages
// const Header = React.lazy(() => import('./containers/Header'));
const Login = React.lazy(() => import('./pages/Login'));
const Register = React.lazy(() => import('./pages/Register'));

// <Route exact path="/login" component={Login} />
// <div><Link to="/login" >Login</Link></div>
class App extends Component {

  render() {
    return (
	    <div className="container">
    		<HashRouter>
		    	<React.Suspense fallback={loading}>
			      <Switch>
			        <Route exact path="/signup" name="Register Page" render={props => <Register {...props}/>} />
			        <Route exact path="/signin" name="Login Page" render={props => <Login {...props}/>} />
			        <PrivateRoute path="/" name="Dashboard" render={props => <Layout {...props}/>} />
			      </Switch>
		      </React.Suspense>
	      </HashRouter>
	    </div>
    );
  }
}

export default App