

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import userpic from '../assets/images/userpicture.png';


export default class Registration extends Component {
	// userpic = 'assets/images/userpicture.png';
	currentGenderValue = "DEFAULT";
	constructor(props) {
      super(props);
      this.state = {
        'userpic': 'assets/images/userpicture.png',
      	formValid: false,
        formValues: {
					first_name: '',
					last_name: '',
					email: '',
					password: '',
					gender: '',
					date_of_birth: '',
					profile_pic: ''
			  }
      }
      this.onChangeHandle = this.onChangeHandle.bind(this);
   };

	handleClick() {
    document.getElementById('upload-file').click();
  }

  onChangeHandle(e) {
  	let image = e.target.files[0];
  	this.setState(this.state.formValues['profile_pic'] = image);
  	this.convertToBase64(e);
  }

  convertToBase64(e) {
  	var file = e.target.files[0];
  	var reader = new FileReader();
  	reader.onloadend = (e) => {
  		 this.setState({'userpic': e.target.result});
    }
    reader.readAsDataURL(file);
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let { formValues } = this.state;
    value.length === 0 ? formValues[name] = value : formValues[name] = value;
    switch (name) {
    	case 'gender': 
          this.currentGenderValue = value;
        break;

      default:
        break;
    }
    this.setState({formValues});
    console.log(this.state);
  }

  registerSubmitHandler = () => {
    if (this.state.formValid) {
      return;
    }
    console.log('state ->', this.state.formValues);
  }

  handleSubmit = (event) =>  {
    event.preventDefault();
    this.setState({formValid: true});
    this.registerSubmitHandler();
    // let valid = validateForm(this.state.formValues);
    // this.setState({formValid: valid}, ()=>{
    //   this.registerSubmitHandler();
    // });
  }

	render(){
		const {formValid, formValues} = this.state;
		return (
			<div>
				<div className="justify-content-center row">
			    <div className="col-md-8">
			    	<h2>Signup</h2>
			      <form onSubmit={this.handleSubmit}>
			      	{/* <img alt="timer" src={require('../assets/images/userpicture.png')} /> */}
			      	<div className="row">
			      		<div className="col-8">
					      	<div className="form-group">
								    <label>First Name</label>
								    <input type="text"
									    className={`form-control ${formValid && !formValues.first_name ? 'is-invalid' : ''}`}
								    	name="first_name"
								    	placeholder="Enter first name"
			                value={formValues.first_name}
								    	onChange={this.handleChange} />
									  <div className="invalid-feedback">
								      <div>First name is required</div>
								    </div>
								  </div>
			      		</div>

			      		<div className="col-4">
				      		<img className={`user-img`} src={this.state.userpic} onClick={this.handleClick} />
				      		<input type="file" id="upload-file" style={{display: 'none'}} accept="image/*" 
							    	name="profile_pic"
							    	onChange={this.onChangeHandle}/>
			      		</div>
			      	</div>
			      	
			      	<div className="form-group">
						    <label>Last Name</label>
						    <input type="text" placeholder="Enter last name" 
					    		className={`form-control ${formValid && !formValues.last_name ? 'is-invalid' : ''}`}
						    	name="last_name"
	                value={formValues.last_name}
						    	onChange={this.handleChange}/>
						    <div className="invalid-feedback">
						      <div>Last name is required</div>
						    </div>
						  </div>
						  
						  <div className="form-group">
						    <label>Email address</label>
						    <input type="email" placeholder="Enter email" 
						    	className={`form-control ${formValid && !formValues.email ? 'is-invalid' : ''}`}
						    	name="email"
	                value={formValues.email}
						    	onChange={this.handleChange}/>
						    <div className="invalid-feedback">
						      <div>Email is required</div>
						    </div>
						  </div>
						  
						  <div className="form-group">
						    <label>Password</label>
						    <input type="password" placeholder="Password" 
						    	className={`form-control ${formValid && !formValues.password ? 'is-invalid' : ''}`}
						    	name="password"
	                value={formValues.password}
						    	onChange={this.handleChange}/>
						    <div className="invalid-feedback">
						      <div>Password is required</div>
						    </div>
						  </div>

						  <div className="form-group">
						    <label>DOB</label>
						    <input type="date" placeholder="Enter date of birth" 
						    		className={`form-control ${formValid && !formValues.date_of_birth ? 'is-invalid' : ''}`}
							    	name="date_of_birth"
		                value={formValues.date_of_birth}
							    	onChange={this.handleChange} />
						    <div className="invalid-feedback">
						      <div>DOB is required</div>
						    </div>
						  </div>
						  
						  <div className="form-group">
						    <label>Gender</label>
						    <select 
						    	className={`form-control ${formValid && !formValues.gender ? 'is-invalid' : ''}`}
						    	name="gender"
						    	placeholder="Enter first name"
						    	onChange={this.handleChange}
						    	value={this.currentGenderValue}>
						    		<option value="DEFAULT" disabled>Choose a gender ...</option>
							    	<option value="0">Male</option>
							    	<option value="1">Female</option>
						    </select>
						    <div className="invalid-feedback">
						      <div>Gender is required</div>
						    </div>
						  </div>

						  <button type="submit" className="btn btn-primary">Submit</button>
						  <div style={{float: 'right'}}><Link to="/signin" >Login</Link></div>
						</form>
			    </div>
				</div>
			</div>
	  )
	}
}