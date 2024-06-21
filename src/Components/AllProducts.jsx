import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../app/cartSlice';

export default function AllProducts() {

let dispatch = useDispatch();

const[newData,setNewData]=useState([]);

		function allProductLoad(){


			axios.get("https://663daf9be1913c4767950554.mockapi.io/footwear")
			.then((res)=>{
				
				// console.log(res.data);
				setNewData(res.data);
			})
		}
		useEffect(()=>{
			allProductLoad();
			// console.log(newData);
		},[])


		function addProductToCart(product){

				// console.log(product);
				let cartProduct={
					id: product.id,
					title:product.title,
					image:product.image,
					price:product.price,
					quantity:1
				}
				// console.log(cartProduct);
				dispatch(addToCart(cartProduct))
		}


  return (
    <div>
        <div class="breadcrumbs">
			<div class="container">
				<div class="row">
					<div class="col">
						<p class="bread"><span><a>Home</a></span> / <span>all products</span></p>
					</div>
				</div>
			</div>
		</div>

        <div class="colorlib-product">
			<div class="container">
				<div class="row">
					<div class="col-lg-3 col-xl-3">
						<div class="row">
							<div class="col-sm-12">
								<div class="side border mb-1">
									<h3>Brand</h3>
									<ul>
										<li><a href="#">Nike</a></li>
										<li><a href="#">Adidas</a></li>
										<li><a href="#">Merrel</a></li>
										<li><a href="#">Gucci</a></li>
										<li><a href="#">Skechers</a></li>
									</ul>
								</div>
							</div>
							<div class="col-sm-12">
								<div class="side border mb-1">
									<h3>Size/Width</h3>
									<div class="block-26 mb-2">
										<h4>Size</h4>
					               <ul>
					                  <li><a href="#">7</a></li>
					                  <li><a href="#">7.5</a></li>
					                  <li><a href="#">8</a></li>
					                  <li><a href="#">8.5</a></li>
					                  <li><a href="#">9</a></li>
					                  <li><a href="#">9.5</a></li>
					                  <li><a href="#">10</a></li>
					                  <li><a href="#">10.5</a></li>
					                  <li><a href="#">11</a></li>
					                  <li><a href="#">11.5</a></li>
					                  <li><a href="#">12</a></li>
					                  <li><a href="#">12.5</a></li>
					                  <li><a href="#">13</a></li>
					                  <li><a href="#">13.5</a></li>
					                  <li><a href="#">14</a></li>
					               </ul>
					            </div>
					            <div class="block-26">
										<h4>Width</h4>
					               <ul>
					                  <li><a href="#">M</a></li>
					                  <li><a href="#">W</a></li>
					               </ul>
					            </div>
								</div>
							</div>
							<div class="col-sm-12">
								<div class="side border mb-1">
									<h3>Style</h3>
									<ul>
										<li><a href="#">Slip Ons</a></li>
										<li><a href="#">Boots</a></li>
										<li><a href="#">Sandals</a></li>
										<li><a href="#">Lace Ups</a></li>
										<li><a href="#">Oxfords</a></li>
									</ul>
								</div>
							</div>
							<div class="col-sm-12">
								<div class="side border mb-1">
									<h3>Colors</h3>
									<ul>
										<li><a href="#">Black</a></li>
										<li><a href="#">White</a></li>
										<li><a href="#">Blue</a></li>
										<li><a href="#">Red</a></li>
										<li><a href="#">Green</a></li>
										<li><a href="#">Grey</a></li>
										<li><a href="#">Orange</a></li>
										<li><a href="#">Cream</a></li>
										<li><a href="#">Brown</a></li>
									</ul>
								</div>
							</div>
							<div class="col-sm-12">
								<div class="side border mb-1">
									<h3>Material</h3>
									<ul>
										<li><a href="#">Leather</a></li>
										<li><a href="#">Suede</a></li>
									</ul>
								</div>
							</div>
							<div class="col-sm-12">
								<div class="side border mb-1">
									<h3>Technologies</h3>
									<ul>
										<li><a href="#">BioBevel</a></li>
										<li><a href="#">Groove</a></li>
										<li><a href="#">FlexBevel</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-9 col-xl-9">
						<div class="row row-pb-md">

						{
							newData.map((eachData,i)=>{
								return(

							<div class="col-lg-4 mb-4 text-center">
								<div class="product-entry border">
									<Link to={"/product-details/"+eachData.id} class="prod-img">
										<img src={eachData.image} style={{width:"100%",height:"250px"}} class="img-fluid" alt="Free html5 bootstrap 4 template"/>
									</Link>
									<div class="desc">
										<h2><a href="#">{eachData.title}</a></h2>
										<span class="price">&#8377;{eachData.price} &nbsp; <del>&#8377;{eachData.mrp}</del></span>      
									</div>
									<button onClick={()=>addProductToCart(eachData)} class="btn btn-primary">Add to Cart</button>
								</div>
							</div>

								)
							})
						}



							{/* <div class="col-lg-4 mb-4 text-center">
								<div class="product-entry border">
									<a href="#" class="prod-img">
										<img src={require('../assets/images/item-1.jpg')} class="img-fluid" alt="Free html5 bootstrap 4 template"/>
									</a>
									<div class="desc">
										<h2><a href="#">Women's Boots Shoes Maca</a></h2>
										<span class="price">$139.00</span>
									</div>
								</div>
							</div> */}

							{/* <div class="col-lg-4 mb-4 text-center">
								<div class="product-entry border">
									<a href="#" class="prod-img">
										<img src={require('../assets/images/item-2.jpg')} class="img-fluid" alt="Free html5 bootstrap 4 template"/>
									</a>
									<div class="desc">
										<h2><a href="#">Women's Minam Meaghan</a></h2>
										<span class="price">$139.00</span>
									</div>
								</div>
							</div>
							<div class="col-lg-4 mb-4 text-center">
								<div class="product-entry border">
									<a href="#" class="prod-img">
										<img src={require('../assets/images/item-3.jpg')} class="img-fluid" alt="Free html5 bootstrap 4 template"/>
									</a>
									<div class="desc">
										<h2><a href="#">Men's Taja Commissioner</a></h2>
										<span class="price">$139.00</span>
									</div>
								</div>
							</div> */}
							
							
							
							
							
						</div>
						{/* <div class="row">
							<div class="col-md-12 text-center">
								<div class="block-27">
				               <ul>
					               <li><a href="#"><i class="ion-ios-arrow-back"></i></a></li>
				                  <li class="active"><span>1</span></li>
				                  <li><a href="#">2</a></li>
				                  <li><a href="#">3</a></li>
				                  <li><a href="#">4</a></li>
				                  <li><a href="#">5</a></li>
				                  <li><a href="#"><i class="ion-ios-arrow-forward"></i></a></li>
				               </ul>
				            </div>
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</div>
    </div>
  )
}
