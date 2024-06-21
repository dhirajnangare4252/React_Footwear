import React from 'react'

export default function Dashboard() {
  return (
    <div>

        <div class="container-fluid">
            <div class="row">
            <div class="col-lg-4 col-md-6 mt-lg-0 mt-3">
                <div class="card">
                    <img src={require('../assets/item-2.jpg')} class="card-img-top" alt=""/>
                    <div class="card-body">
                        <p>Lorem ipsum dolor sit amet</p>                   
                        <a href="" class="btn btn-danger">Read More...</a>
                    </div>
                </div>  
            </div>
            <div class="col-lg-4 col-md-6 mt-lg-0 mt-3">
                <div class="card">
                    <img src={require('../assets/item-1.jpg')} class="card-img-top" alt=""/>
                    <div class="card-body">
                        <p>Lorem ipsum dolor sit amet </p>
                        <a href="" class="btn btn-danger">Read More...</a>
                    </div>
                </div>  
            </div>
            <div class="col-lg-4 col-md-6 mt-lg-0 mt-3">
                <div class="card">
                    <img src={require('../assets/item-3.jpg')} class="card-img-top" alt=""/>
                    <div class="card-body">
                        <p>Lorem ipsum dolor sit amet </p>
                        <a href="" class="btn btn-danger">Read More...</a>
                    </div>
                </div>  
            </div>
            </div>
        </div>

            
    </div>
  )
}
