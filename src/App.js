import React, { Component } from 'react';
import { Switch, Route, HashRouter, Link } from 'react-router-dom';

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
const Login = React.lazy(() => import('./pages/login/Login'));
// <Route exact path="/login" component={Login} />

class App extends Component {

  render() {
    return (
	    <div>
    		<HashRouter>
	    		<div><Link to="/login" >Login</Link></div>
		    	<React.Suspense fallback={loading}>
			      <Switch>
			        <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
			        <Route path="/" name="Home" render={props => <Layout {...props}/>} />
			      </Switch>
		      </React.Suspense>
	      </HashRouter>
	    </div>
    );
  }
}

export default App