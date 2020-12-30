import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import userpic from '../assets/images/userpicture.png';

export default class Registration extends Component {
	// userpic = 'assets/images/userpicture.png';

	constructor(props) {
      super(props);
      this.state = {
         userpic: 'assets/images/userpicture.png'
      }
      this.onChangeHandle = this.onChangeHandle.bind(this);
   };

	handleClick() {
    document.getElementById('upload-file').click();
  }

  onChangeHandle(e) {
  	let image = e.target.files[0];
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

	render(){
		return (
			<div>
				<div className="justify-content-center row">
			    <div className="col-md-8">
			    	<h2>Signup</h2>
			      <form>
			      	{/* <img alt="timer" src={require('../assets/images/userpicture.png')} /> */}
			      	<div className="row">
			      		<div className="col-8">
					      	<div className="form-group">
								    <label>First Name</label>
								    <input type="text" className="form-control" placeholder="Enter first name" />
								  </div>
			      		</div>
			      		<div className="col-4">
				      		<img className="user-img" src={this.state.userpic} onClick={this.handleClick} />
				      		<input type="file" id="upload-file" style={{display: 'none'}} accept="image/*" 
				      			onChange={this.onChangeHandle}/>
			      		</div>
			      	</div>
			      	
			      	<div className="form-group">
						    <label>Last Name</label>
						    <input type="text" className="form-control" placeholder="Enter last name" />
						  </div>
						  
						  <div className="form-group">
						    <label>Email address</label>
						    <input type="email" className="form-control" placeholder="Enter email" />
						  </div>
						  
						  <div className="form-group">
						    <label>Password</label>
						    <input type="password" className="form-control" placeholder="Password" />
						  </div>

						  <div className="form-group">
						    <label>DOB</label>
						    <input type="date" className="form-control" placeholder="Enter email" />
						  </div>
						  
						  <div className="form-group">
						    <label>Gender</label>
						    <select className="form-control">
						    	<option>Male</option>
						    	<option>Female</option>
						    </select>
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