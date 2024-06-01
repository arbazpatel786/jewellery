import './Login.css';
import { useState } from 'react';
import axios from 'axios';
import { _webapi } from '../webapi';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Login = ()=>{
    const navigate = useNavigate();
const[email , setEmail] =useState();
const [password , setPassword] = useState();

const handleSubmit = (evt)=>{
evt.preventDefault();
let userDetails={"email":email,"password":password};
axios.post(_webapi+"login",userDetails).then((response)=>{
 if(response.data.token!="error"){
    console.log(response.data);
localStorage.setItem("token",response.data.token);
let user=response.data.userDetails;
localStorage.setItem("name",response.data.userDetails.name);
localStorage.setItem("email",user.email);
localStorage.setItem("password",user.password);
localStorage.setItem("mobile",user.mobile);
localStorage.setItem("address",user.address);
localStorage.setItem("city",user.city);
localStorage.setItem("gender",user.gender);
localStorage.setItem("role",user.role);
localStorage.setItem('_id',user._id);
localStorage.setItem("info",user.info);

response.data.userDetails.role=="admin"?navigate('/admin'):navigate('/user');
 }
else{
    setEmail('');
    setPassword('');
    alert("Please Enter Valid Details");
}
}).catch((err)=>{
console.log(err)
})

}
    return (
        <div class="about wow fadeInUp" data-wow-delay="0.1s">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-12 col-md-12">
                    <div class="about-text">
                    <h2>Login Here!!!</h2>

    <form onSubmit={handleSubmit} >
        <div class="form-group">
          <label for="email">Email address:</label>
          <input type="email" class="form-control" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div class="form-group">
          <label for="pwd">Password:</label>
          <input type="password" class="form-control" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <a  class="nav-link " ><Link to="/reset-Password">Reset Password </Link></a>
        <button type="submit" class="btn btn-success">Login</button>
      </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    )
}
export default Login;