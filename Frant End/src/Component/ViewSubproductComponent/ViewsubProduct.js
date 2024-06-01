import { useState } from "react";
import './Viewsubproduct.css'
import { useEffect } from "react";
import axios from "axios";
import { _webapiadmin } from "../webapi";
import { useParams } from "react-router-dom";


const Viewsubproduct= (proms)=>{
 
    const [pName , setPname] = useState();
    const [ SubpName , setSubpname] = useState();
    const [ subproducticon , setSubproducticon] = useState();
    
    const [ cdetails, setcdetails]= useState([]);
    const params = useParams();
    useEffect(()=>{
        axios.get(_webapiadmin+"fetchsubproduct?pname="+params.catnm).then((result)=>{
            setcdetails(result.data.result);
        }).catch((err)=>{
    
        })
    }) 

    return (
        <section id="products" class="products">
        <div class="tab-pane fade show active" id="jwellery" role="tabpanel" aria-labelledby="jwellery-tab">
        <div class="row item-product1" >
       { cdetails.map(ele=>{
        let image= "../../assets/uploads/subproducticon/"+ele.subicon;;

        return   <div class="col-md-3 col-sm-6 mb-3 block" >
        <div class="item-product">
          <a href="#" class="product-thumb-link">
            <img src={image} class="img-fluid" />
          </a>
        </div>
        <div class="product-info">
          <div class="d-flex justify-content-between py-3">
            <a href="#" class="cat-parent">{ele.subname}</a>
            <a href="#" class="wishlist">
              <i class="fa fa-heart"></i>
            </a>
          </div>
          <h4 class="product-title">
            <a href="#">{ele.pnm}</a>
          </h4>
          <div class="product-price">
            <ins><span class="money text-white">$300.00</span></ins>&nbbsp;&nbbsp;
            <a href="#" class="main-btn">Shop now</a>
          </div>
       
        </div>
      </div>


        })
    }

        </div>
      </div>
      </section>
    )
}
export default Viewsubproduct;