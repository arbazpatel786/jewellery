import { useState } from "react";
import { Link } from "react-router-dom";
import './Viewproduct.css'
import { useEffect } from "react";
import axios from "axios";
import { _webapiadmin } from "../webapi";


const Viewproduct= ()=>{

    const [pName , setPname] = useState();
    const [ SubpName , setSubpname] = useState();
    const [ subproducticon , setSubproducticon] = useState();
    
    const [ cdetails, setcdetails]= useState([]);

    useEffect(()=>{
        axios.get(_webapiadmin+"addproduct").then((result)=>{
            setcdetails(result.data.result);
        }).catch((err)=>{
    
        })
    }) 

    return (
        <section id="products" class="products">
        <div class="tab-pane fade show active" id="jwellery" role="tabpanel" aria-labelledby="jwellery-tab">
        <div class="row item-product1" >
       { cdetails.map(ele=>{
        let image= "../assets/uploads/producticons/"+ele.catfilename;
        let path =  '/user/viewsubproduct/'+ele.catname;
        return   <div class="col-md-3 col-sm-6 mb-3 block" >
        <div class="item-product">
          <a  class="product-thumb-link"><Link to={path} >
            <img src={image} class="img-fluid" /></Link>
          </a>
        </div>
        <div class="product-info">
          <div class="d-flex justify-content-between py-3">
            <a href="#" class="cat-parent">{ele.catname}</a>
            <a href="#" class="wishlist">
              <i class="fa fa-heart"></i>
            </a>
          </div>
          <h4 class="product-title">
            <a href="#">{ele.product_title}</a>
          </h4>
          <div class="product-price">
            <ins><span class="money text-white">$300.00</span></ins>
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
export default Viewproduct;