import axios from 'axios';

var endpoint = 'http://192.168.0.133:8001/api';

// setHeader = () => {
// 	let token= 'cdsafdsadsadzx';
// 	const headers = {
//     'Content-Type': 'application/json',
//     'Authorization': `Token ${token}`
//   }
// }

const AuthService = {
  
  login(data) {
    return axios.post(`${this.endpoint}/login/`, data);
  }

}

export default AuthService