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
  let valid = false;
  Object.values(errors).forEach(
    (val) => {
      if (typeof val === 'boolean' && val) {
        valid = true;
      }
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
      },
      formValues: {
        password: '',
        email: '',
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let { errors, formValues } = this.state;
    switch (name) {
      case 'email': 
          value.length === 0 ? errors.isValidEmail = true : errors.isValidEmail = false;
          formValues.email = value;
        break;

      case 'password':
      	value.length === 0 ? errors.isValidPassword = true : errors.isValidPassword = false;
        formValues.password = value;
        break;

      default:
        break;
    }
    this.setState({errors, [name]: value, formValues});
  }


  loginSubmitHandler = () => {
    if (this.state.formValid) {
      return;
    }
    console.log('state ->', this.state);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({submitted: true});
    let valid = validateForm(this.state.errors);
    this.setState({formValid: valid}, ()=>{
      this.loginSubmitHandler();
    });
  }

	render(){
		const {errors, formValues, submitted} = this.state;
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
                value={formValues.email}
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
                value={formValues.password}
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