import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// export default function Login() {
//   return (
//     <div>
//       Login
//     </div>
//   )
// }

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => {
    	val.length > 0 && (valid = false)
    }
  );
  return valid;
}

class Login extends Component {

	constructor(props) {
    super(props);
    this.state = {
    	submitted: false,
      formValid: false,
      errorCount: null,
      errors: {
        password: '',
        isValidPassword: true,
        email: '',
        isValidEmail: true
      }
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      case 'email': 
          value.length === 0 ? errors.isValidEmail = true : 
          errors.isValidEmail = false;
        break;

      case 'password':
      	value.length === 0 ? errors.isValidPassword = true : errors.isValidPassword = false;
        break;

      default:
        break;
    }
    this.setState({errors, [name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({submitted: true});
    // this.setState({formValid: validateForm(this.state.errors)});
    // this.setState({errorCount: countErrors(this.state.errors)});
  }

	render(){
		const {errors, formValid, submitted} = this.state;
		return (
			<div className="justify-content-center row">
		    <div className="col-md-8">
		    	<h2>Signin</h2>
		      <form onSubmit={this.handleSubmit}>
					  <div className="form-group">
					    <label>Email address</label>
					    <input type="email" 
					    	className={`form-control ${submitted && errors.isValidEmail ? 'is-invalid' : ''}`}
					    	name="email"
					    	placeholder="Enter email" 
					    	onChange={this.handleChange}/>
					    <div className="invalid-feedback">
					        <div>Email is required</div>
					    </div>
					  </div>
					  
					  <div className="form-group">
					    <label>Password</label>
					    <input type="password" name='password' 
					    	className={`form-control ${submitted && errors.isValidPassword ? 'is-invalid' : ''}`} 
					    	placeholder="Password" 
					    	onChange={this.handleChange}/>
					    <div className="invalid-feedback">
					      {(submitted && errors.isValidPassword) &&  <div>Password is required</div>}
					    </div>
					  </div>

					  <button type="submit" className="btn btn-primary">Submit</button>
					  <div style={{float: 'right'}}><Link to="/signup" >Register</Link></div>
					</form>
		    </div>
			</div>
	  )
	}
}

// const Login = () => {
//   return (
  	
//   )
// }

export default Login