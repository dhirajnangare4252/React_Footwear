import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AdminAllProduct() {
  return (
    <div>
    <div class="container">
        <div class="row">
            {/* <div class="col-lg-3"></div> */}
            <div class="col-lg-12 mt-4">
               <Outlet></Outlet>
               
                <div class="row">
                    <div class="col-lg-4">
                        <div class="card">
                            <img src={require('../assets/item-1.jpg')} class="card-img-top" alt=""/>           
                            <div class="card-body">
                                <p>Lorem ibus eos quia </p>
                                <a href="" class="btn btn-danger">Read More...</a>                       
                            </div>
                        </div> 
                    </div>
                    <div class="col-lg-4">
                        <div class="card">
                            <img src={require('../assets/item-2.jpg')} class="card-img-top" alt=""/>
                            <div class="card-body">
                                <p>Lorem ibus eos quia </p>
                                <a href="" class="btn btn-danger">Read More...</a>
                            </div>
                        </div> 
                    </div> 
                    <div class="col-lg-4">
                        <div class="card">
                            <img src={require('../assets/item-3.jpg')} class="card-img-top" alt=""/>
                            <div class="card-body">
                                <p>Lorem ibus eos quia lorem</p>
                                 <a href="" class="btn btn-danger">Read More...</a>
                            </div>
                        </div> 
                    </div>  
                </div>
               
            
            </div>
        </div>
    </div>
          
    </div>
  )
}
