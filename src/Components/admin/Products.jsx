import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Products() {

  const[newData,setNewData]=useState([]);

  function loadData(){

    axios.get("https://663daf9be1913c4767950554.mockapi.io/footwear")
    .then((res)=>{
        // console.log(res.data);
        setNewData(res.data);
    })
    }

    function handleDelete(id){
      // alert(id)

      axios.delete("https://663daf9be1913c4767950554.mockapi.io/footwear/"+id)
      .then((res)=>{
        console.log(res.data);
        loadData();
      })

    }


useEffect(()=>{
  loadData();
  // console.log(newData);
},[])
  return (
    <div>
        <table class="table">
              <thead class="bg-info">
                <tr class="text-center">
                  <th scope="col">#</th>
                  <th scope="col">Image</th>
                  <th scope="col">Title</th>
                  <th scope="col">Category</th>
                  <th scope="col">Price</th>
                  <th scope="col">MRP</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Color</th>
                  <th scope="col">Brand</th>
                  <th scope="col">Size</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
            <tbody class="text-center">
              {
                newData.map((eachData,i)=>{

                  return(
                    <tr key={i}>
                      <th scope="row">{i+1}</th>
                      <td><img src={eachData.image} style={{height:"80px",width:"80px"}}/></td>
                      <td>{eachData.title}</td>
                      <td>{eachData.category}</td>
                      <td>{eachData.price}</td>
                      <td><del>{eachData.mrp}</del></td>
                      <td>{eachData.gender}</td>
                      <td>{eachData.color}</td>
                      <td>{eachData.brand}</td>
                      <td>{eachData.size}</td>
                      <td>
                      <Link to={"/admin/addproducts/" + eachData.id}>
                          <button class="btn btn-primary"><i class="fa-solid fa-pencil"></i></button>

                      </Link>
                   
                      <button onClick={()=>{handleDelete(eachData.id)}} class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
                      </td>
                  </tr>
                  )
                })
              }
              
            </tbody>
        </table>
    </div>
  )
}
