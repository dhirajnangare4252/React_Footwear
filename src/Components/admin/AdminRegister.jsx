import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AdminRegister() {

  let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;  //from simplilearn website
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handlechange(e){
    setInput({...input,[e.target.name]:e.target.value });
  }

  function handlesubmit(e){
    e.preventDefault();

    localStorage.setItem("user",JSON.stringify(input));
    navigate("/login");
  };
 
  return (
    <div>
       <div class="container mt-4">
          <div class="row">
              <div class="col-lg-4"></div>
              <div class="col-lg-4">
              <form>
              
                <div data-mdb-input-init class="form-outline mb-4">
                  <input type="text" 
                         id='name' 
                         name="name" 
                         value={input.name}
                         class="form-control"
                         onChange={(e)=>{
                            handlechange(e)
                         }} 
                  />
                  <label class="form-label" for="form2Example1">Enter Your Name</label> <span className="text-danger">*</span>
                </div>

                <div data-mdb-input-init class="form-outline mb-4">
                  <input type="text" 
                         id='email'
                         name="email"
                         value={input.email}
                         class="form-control"
                         onChange={(e)=>{
                            handlechange(e)
                         }} 
                    />
                  <label class="form-label" for="form2Example1">Email address</label> <span className="text-danger">*</span>
                </div>

                <div data-mdb-input-init class="form-outline mb-4">
                  <input type="text"
                         id='password' 
                         name="password"
                         value={input.password}
                         class="form-control"
                         onChange={(e)=>{
                            handlechange(e)
                         }} 
                   />
                  <label class="form-label" for="form2Example2">Password</label><span className="text-danger">*</span>
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

                <Link to={"/login"}><button onClick={handlesubmit}  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn mb-4">Register</button></Link>

              </form>
              </div>
              <div class="col-lg-4"></div>
          </div>
       </div>
    </div>
  )
}
