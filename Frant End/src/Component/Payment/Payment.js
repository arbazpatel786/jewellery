import { useState } from "react";

import { useEffect } from "react";
import axios from "axios";
import { _webapi } from "../webapi";
import { useParams } from "react-router-dom";


const Payment = () =>{
    const [paypalURL , setpaypalURL] = useState();
    const [ paypalID , setpaypalID] = useState();
    const [ amount , setamount] = useState();
    
    const [ cdetails, setcdetails]= useState([]);
    const params = useParams();
    useEffect(()=>{
        // let apiurl=_webapiadmin+"manageuserstatus?s="+s+"&regid="+_id ;
      
        axios.get(_webapi+"funds").then((result)=>{
           setpaypalURL(result.data.paypalURL);
           setpaypalID(result.data.paypalID);
           setamount(result.data.amount)
        }).catch((err)=>{
     })
    })

    
    let uid = localStorage.getItem("email")
   
const apiurl = `http://localhost:3000/user/paymentS/?amount=${amount}&uid=${uid}`

 

    return (
        <div class="about wow fadeInUp" data-wow-delay="0.1s">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-12 col-md-12">
                    <div class="about-text">
<h1>Raise Funds To Make Charity</h1>
<h2>Donate &#8377;100 For Charity</h2>

<form action="https://www.sandbox.paypal.com/cgi-bin/webscr"  method="post" >
{/* <!-- Identify your business so that you can collect the payments. --> */}
<input type="hidden" name="business" value={paypalID} />

{/* // <!-- Specify a Buy Now button. --> */}
<input type="hidden" name="cmd" value="_xclick" />

{/* <!-- Specify details about the item that buyers will purchase. --> */}
<input type="hidden" name="item_name" value="funds" />

<input type="hidden" name="amount" value={amount} />
<input type="hidden" name="currency_code" value="USD" />

{/* <!-- Specify URLs --> */}
<input type='hidden' name='cancel_return' value="http://localhost:3000/user/cancel/" />
<input name='return' value={apiurl} />

{/* <!-- Display the payment button. --> */}
<input type="image" name="submit" border="0"
height="50" width="200" src="../img/donate.png" alt="PayPal - The safer, easier way to pay online" />
<img alt="" border="0" width="1" height="1" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" />
</form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Payment;