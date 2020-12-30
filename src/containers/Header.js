import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return(
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<Link to="/login" className="navbar-brand">Navbar</Link>
			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
			  <div className="navbar-nav">
				  <Link to="/login" className="nav-item nav-link active">Home</Link>
				  <Link to="/login" className="nav-item nav-link">Features</Link>
			  </div>
			</div>
		</nav>
	)
}

// class Header {
// 	render(){
// 		return(
// 			<div>Header page loaded</div>
// 		)
// 	}
// }

export default Header