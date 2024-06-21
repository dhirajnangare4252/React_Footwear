import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Layout() {

  const navigate  = useNavigate();
  function handleLogout(){
    localStorage.removeItem("loggedIn");
    navigate("/login")
   }

  return (
    <div>
      <div class="breadcrumbs">
        <div class="container-fluid">
          <div class="row">
            <div class="col">
              <p class="bread">
                <span>
                  <a>admin</a>
                </span>{" "}
                / <span>dashboard</span>
                <a type='button' onClick={handleLogout} style={{float:"right"}} class="btn text-white btn-primary">LogOut</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-2 ">
            <header>
              <nav
                id="sidebarMenu"
                class="collapse d-lg-block sidebar collapse bg-white"
              >
                <div class="position-sticky">
                  <div class="list-group list-group-flush mx-3 mt-4 border-right">
                    <Link
                      to={"/admin"}
                     
                      class="list-group-item list-group-item-action py-2 ripple"
                      aria-current="true"
                    >

                      <i class="fas fa-tachometer-alt fa-fw me-3"></i>
                      <span>Main dashboard</span>
                    </Link>
                    
                    <Link
                      to={"/admin/products"}
                      class="list-group-item list-group-item-action py-2 ripple"
                    >
                      <i class="fas fa-chart-bar fa-fw me-3"></i>
                      <span>Prouducts</span>
                    </Link>

                    <Link
                      to={"/admin/addproducts"}
                      class="list-group-item list-group-item-action py-2 ripple"
                    >
                      <i class="fas fa-chart-bar fa-fw me-3"></i>
                      <span>Add Product</span>
                    </Link>

                    <Link to={"/admin/sales"} class="list-group-item list-group-item-action py-2 ripple">
                      <i class="fas fa-money-bill fa-fw me-3"></i>
                      <span>Sales</span>
                    </Link>
                  </div>
                </div>
              </nav>
            </header>
          </div>

          <div class="col-lg-10 mt-4">
            {/* <div class="row">
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
                                <p>Lorem ibus eos quia </p>
                                 <a href="" class="btn btn-danger">Read More...</a>
                            </div>
                        </div> 
                    </div>  
                </div>
                */}

            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
