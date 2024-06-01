import { useState } from "react";

import { useEffect } from "react";
import axios from "axios";
import { _webapi } from "../webapi";
import { useParams } from "react-router-dom";



const PaymentS = (proms)=>{
const params = useParams();
const uid = localStorage.getItem("email")
const amount = 100
useEffect(()=>{
    axios.post(_webapi+"payment?amount="+amount+"&uid="+uid).then((result)=>{
        console.log(result)
    }).catch((err)=>{

    })
}) 


    return (
        <>
        <div class="product-info">
                      <div class="d-flex justify-content-between py-3">
                        <a href="#" class="cat-parent">Women</a>
                        <a href="#" class="wishlist">
                          <i class="fa fa-heart"></i>
                        </a>
                      </div>
                      <h4 class="product-title">
                        <a href="#">Titanium ring in ged Arbaj patel  metal</a>
                      </h4>
                      <div class="product-price">
                        <ins><span class="money text-white">$786.00</span></ins>
                      </div>
                      <div class="d-flex align-items-center justify-content-between py-1">
                        <div class="rating">
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                        </div>
                        <div class="basket">
                          <a href="#"><i class="fas fa-shopping-basket"></i></a>
                        </div>
                      </div>
                    </div>
                  
        </>
    )
}
export default PaymentS