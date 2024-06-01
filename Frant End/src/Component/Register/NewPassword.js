import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { _webapi } from "../webapi";

const NewPassword = ()=>{
    const params = useParams();
    const navigate =useNavigate();
    const [password ,setPassword] = useState();
    const [password1 ,setPassword1] = useState();
const handlSubmit =(evt)=>{
    evt.preventDefault();
if(password===password1){
axios.post(_webapi+"newPassword?email="+params.email ,{"newpass":password}).then((result)=>{
  console.log(result);
if(result.data.result==="success"){
    navigate('/login');
}
})
}else{
    alert("Make Valid Password");
    setPassword('');
    setPassword1('');
}
}
    return(
        <div class="about wow fadeInUp" data-wow-delay="0.1s">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-12 col-md-12">
                    <div class="about-text">
                    <h2>New Password!!!</h2>

    <form  onSubmit={handlSubmit}>
    <div class="form-group">
          <label for="pwd">Create Password:</label>
          <input type="password" class="form-control" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <div class="form-group">
          <label for="pwd">Comfirm Password:</label>
          <input type="password" class="form-control" value={password1} onChange={e => setPassword1(e.target.value)} />
        </div>
        <button type="submit" class="btn btn-success">Change Password</button>
      </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    )
}
export default NewPassword ;