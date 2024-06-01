import './Register.css';
import axios from 'axios';
import { _webapi } from '../webapi';

import {Button,ButtonGroup,Modal,styled,TextField,Typography,} from "@mui/material";
import React, { useState } from "react";

import { Box } from "@mui/system";
import { useNavigate } from 'react-router-dom';


const SytledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});



function ResetPassword()
{
const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [ emails , setEmail ] = useState();
  const [otp ,setOtp]= useState();
 
let email = emails ;
  const handleSubmit=(evt)=>{
    evt.preventDefault();
    let userDetails={"email":email};
    //console.log(userDetails);

    axios.post(_webapi+"resetPassword",userDetails).then((response)=>{
      console.log(response.data.result);
      //alert("Its done.....");  
    }).catch((err)=>{

    });
  };

  const  verifyOtp = (evt)=>{
    evt.preventDefault();
    let userOtp = {"email":email, "otp" : otp}
    axios.post(_webapi+"verifyOtp",userOtp).then((response)=>{
     if(response.data.result==='success'){
      navigate('/newpassword/'+email)
      setOtp('');
      setEmail('')}
      else{
        alert("Wrong Otp ");
        setOtp('');
      }

        
    }).catch((err)=>{
console.log("gadbad",err)

    });


  }


  return(
    <div class="about wow fadeInUp" data-wow-delay="0.1s">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-12 col-md-12">
<div class="about-text">

<h2>Reset Password Here!!!</h2>

<form onSubmit={handleSubmit} >
   
    <div class="form-group">
      <label for="email">Email address : </label>
      <input type="email" class="form-control" value={email} onChange={e => setEmail(e.target.value)} />
    </div>
    
    <button type="submit" class="btn btn-success"  onClick={(e) => setOpen(true)}>Send OTP </button>
  </form>

</div>
            </div>
        </div>
    </div>
    <SytledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={350}
          height={230}
          bgcolor={"white"}
          color={"text.primary"}
          p={4}
          borderRadius={5}
        >
          <Typography variant="h5" color="black" textAlign="center" marginBottom={3}>
           Enter OTP Here
          </Typography>
          
          <TextField value={otp} onChange={e => setOtp(e.target.value)}
            sx={{ width: "80%" }}
            id="standard-multiline-static"
            multiline
           
            placeholder="Enter Your Code"
            variant="standard"
          />
        
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button onClick={verifyOtp}   sx={{ top: 20,}}>Verify OTP</Button>
        
          </ButtonGroup>
        </Box>
      </SytledModal>
</div>

  );
}

export default ResetPassword;