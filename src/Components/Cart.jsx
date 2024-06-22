import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {removeFromCart, incrementQuantity,decrementQuantity, setTotalAmount} from '../app/cartSlice.js'
import { Link } from 'react-router-dom';

export default function Cart() {

	let allTotal = 0;
	const dispatch = useDispatch();

	let data = useSelector((state)=>{
		return state.cart.products
	})

	
	console.log(data);
  return (
    <div>
        <div class="colorlib-product">
			<div class="container">
				<div class="row row-pb-lg">
					<div class="col-md-12">
						<div class="product-name d-flex">
							<div class="one-forth text-left px-4">                
								<span>Product Details</span>
							</div>
							<div class="one-eight text-center">
								<span>Price</span>
							</div>
							<div class="one-eight text-center">
								<span>Quantity</span>
							</div>
							<div class="one-eight text-center">
								<span>Total</span>
							</div>
							<div class="one-eight text-center px-4">
								<span>Remove</span>
							</div>
						</div>

						{
							data.map((product)=>{
								allTotal += product.price*product.quantity
								return(
							
									<div class="product-cart d-flex">
							<div class="one-forth">
								<div class="product-img" style={{backgroundImage:`url(${product.image})` }}>
								</div>
								<div class="display-tc">
									<h3>{product.title}</h3>
								</div>
							</div>
							<div class="one-eight text-center">
								<div class="display-tc">
									<span class="price">${product.price}</span>
								</div>
							</div>
							<div class="one-eight text-center">
								<div class="display-tc">
								    <div className='d-flex'>
									<button onClick={()=>dispatch(decrementQuantity(product.id))} className='btn btn-primary'>-</button>
									<input type="text" id="quantity" name="quantity" class="form-control input-number text-center" value={product.quantity} min="1" max="100"/>
								    <button onClick={()=>dispatch(incrementQuantity(product.id))} className='btn btn-primary'>+</button>
									</div>
								</div>
							</div>
							<div class="one-eight text-center">
								<div class="display-tc">
									<span class="price">${product.price * product.quantity}</span>
								</div>
							</div>
							<div class="one-eight text-center">
								<div class="display-tc">
									<button onClick={()=>dispatch(removeFromCart(product.id))} className='btn btn-secondary'>X</button>
								</div>
							</div>
						</div>
								)
							})
						}




						
						
					</div>
				</div>
				<div class="row row-pb-lg">
					<div class="col-md-12">
						<div class="total-wrap">
							<div class="row">
								<div class="col-sm-8">
									<form action="#">
										<div class="row form-group">
											<div class="col-sm-9">
												<input type="text" name="quantity" class="form-control input-number" placeholder="Your Coupon Number..."/>
											</div>
											<div class="col-sm-3">
												<input type="submit" value="Apply Coupon" class="btn btn-primary"/>
											</div>
										</div>
									</form>
								</div>
								<div class="col-sm-4 text-center">
									<div class="total">
										<div class="sub">
											<p><span>Subtotal:</span> <span>$200.00</span></p>
											<p><span>Delivery:</span> <span>$0.00</span></p>
											<p><span>Discount:</span> <span>$45.00</span></p>
										</div>
										<div class="grand-total">
											<p><span><strong>Total:</strong></span> <span>{allTotal}</span></p>
										</div>
										<div className='mt-4'>
											<Link onClick={()=>dispatch(setTotalAmount(allTotal))} to={"/checkout"}><button className='btn btn-primary'>Proceed to Checkout</button></Link>
										</div>
									</div>
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
