import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

export default function Admin() {

  const navigate = useNavigate();
  const[input,setInput] = useState({
      email: "",
      password: "",
  });

  function handleChange(e){
    setInput({...input,[e.target.name]:e.target.value })
  }

  function handlesubmit(e){
    e.preventDefault();

    const loggedUser = JSON.parse(localStorage.getItem("user"));

    if(input.email ===loggedUser.email && input.password ===loggedUser.password){
            
      localStorage.setItem("loggedIn",true)
      navigate("/admin")
    }else{
      // setCommonError("Invalid Credentials !!")
      Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid Credentials !",
          // footer: '<a href="#">Why do I have this issue?</a>'
        });
     }
  }

 
  return (
    <div>
       <div class="container mt-4">
          <div class="row">
              <div class="col-lg-4"></div>
              <div class="col-lg-4">
              <form>
              
                <div data-mdb-input-init class="form-outline mb-4">
                  <input type="email" name="email" onChange={(e)=>{handleChange(e)}} value={input.email} class="form-control" />
                  <label class="form-label" for="form2Example1">Email address</label> <span className="text-danger">*</span>
                </div>

                <div data-mdb-input-init class="form-outline mb-4">
                  <input type="password" name="password"  onChange={(e)=>{handleChange(e)}} value={input.password} class="form-control" />
                  <label class="form-label" for="form2Example2">Password</label> <span className="text-danger">*</span>
                </div>

                  <div class="row mb-4">
                      <div class="col d-flex justify-content-center">
                      
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                          <label class="form-check-label" for="form2Example31"> Remember me </label>
                        </div>
                      </div>

                      <div class="col">
                      
                        <a href="#!">Forgot password?</a>
                      </div>
                  </div>

                  <div className='d-flex'>
                     <Link><button onClick={handlesubmit} type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn mb-4">Sign in</button></Link>
                     <p className='ms-4'>Not a member? <Link to={"/register"}>Register Here</Link></p>
                  </div>
              </form>
              </div>
              <div class="col-lg-4"></div>
          </div>
       </div>
    </div>
  )
}
