import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function AddProducts() {

    const navigate = useNavigate();
    const {id} = useParams();

    // const[id,setId]=useState(indefined)

    const[data,setData]=useState({
        title:"",
        category:"",
        price:"",
        mrp:"",
        image:"",
        gender:"",
        brand:"",
        size:""
    });


        function handleChange(e){

            // console.log(e.target.id);
            // console.log(e.target.value);
            setData({...data,[e.target.id] : e.target.value})
            // console.log(data);

        };
        function handleSubmit(){

            if(id!=undefined){
                    axios.put("https://663daf9be1913c4767950554.mockapi.io/footwear/"+id,data)
                    .then((res) => {
                    // console.log(res.data);
                    
                    setData({
                        title:"",
                        category:"",
                        price:"",
                        mrp:"",
                        image:"",
                        gender:"",
                        brand:"",
                        size:""
                    })
                    navigate("/admin/products");
                })
            }
            else{
                    axios.post("https://663daf9be1913c4767950554.mockapi.io/footwear",data)
                    .then((res)=>{
                        console.log(res.data);
                        setData({
                            title:"",
                            category:"",
                            price:"",
                            mrp:"",
                            image:"",
                            gender:"",
                            brand:"",
                            size:""
                        })
                    
                        navigate("/admin/products");
                    })    
            }

           
        }

        useEffect(()=>{
            if(id){
                axios.get("https://663daf9be1913c4767950554.mockapi.io/footwear/" + id)
                .then((res)=>{
                    // console.log(res.data);
                    setData(res.data)
                })
            }
        },[])


  return (
    <div>

    <div class="container-fluid">
      <div class="row">
            <div class="col-lg-6">
                <label class="form-label">Title</label>
                <input id='title' value={data.title} type="text" onChange={(e)=>{handleChange(e)} }class="form-control"/>
            </div>
            <div class="col-lg-6">
                <label class="form-label">Category</label>
                <div class="input-group">
                    <select id='category' value={data.category} type="text" onChange={(e)=>{handleChange(e)} }  class="form-select">
                        <option >-select-</option>
                        <option value='mens'>Men's</option>
                        <option value='womens'>Womens</option>
                        <option value='kids'>Kid's</option>
                    </select>
                </div>
            </div>
      </div>
      <div class="row mt-4">
            <div class="col-lg-4">
                <label class="form-label">Price</label>
                <input id='price' value={data.price} onChange={(e)=>{handleChange(e)} } type="text" class="form-control"/>
            </div>
            <div class="col-lg-4">
                <label class="form-label">MRP</label>
                <input id='mrp' value={data.mrp} onChange={(e)=>{handleChange(e)} } type="text" class="form-control" />
            </div>
            <div class="col-lg-4">
                <label class="form-label">Image</label>
                <input value={data.image} id='image' onChange={(e)=>{handleChange(e)} } type="text" class="form-control"/>
            </div>
            
      </div>
      <div class="row mt-4">
            <div class="col-lg-4">
                <label class="form-label">Gender</label>
                <div class="input-group">
                    {/* <input type="text" class="form-control" placeholder="choose.."/> */}
                    <select id='gender' value={data.gender} type="text" onChange={(e)=>{handleChange(e)} } class="form-select">
                        <option >-select-</option>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                    </select>
                </div>
            </div>
            <div class="col-lg-4">
                <label class="form-label">Color</label>
                <input id='color' value={data.color} onChange={(e)=>{handleChange(e)} } type="text" class="form-control" />
            </div>
            <div class="col-lg-4">
                <label class="form-label">Brand</label>
               <div class="input-group">
                    <select id='brand' value={data.brand} type="text" onChange={(e)=>{handleChange(e)} }  class="form-select">
                        <option>-select-</option>
                        <option value='puma'>Puma</option>
                        <option value='nike'>Nike</option>
                        <option value='adidas'>Adidas</option>
                        <option value='woodland'>Woodland</option>
                        <option value='spark'>Spark</option>
                    </select>
                </div>
            </div>
      </div>
      <div class="row mt-3">
            <div class="col-lg-4">
                <label class="form-label">Size</label>
                <input id='size' value={data.size} onChange={(e)=>{handleChange(e)} } type="number" class="form-control" />
            </div>
            <div class="col-lg-8">
            <label class="form-label">Description</label>
            <textarea class="form-control" placeholder="Enter address"></textarea>
            </div>
      </div>
      <div class="row mt-3">
            <div class="col-lg-6">
              <button onClick={handleSubmit} class="btn btn-success">Submit</button>
            </div>
            {/* <div class="col-lg-6">
            <button class="btn btn-danger">Reset</button>
            </div> */}
        </div>
    </div>
           
    </div>
  )
}
