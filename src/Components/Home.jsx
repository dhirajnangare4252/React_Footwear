
import React from 'react'
import cara1 from '../assets/images/img_bg_1.jpg'
import cara2 from '../assets/images/img_bg_2.jpg'
import cara3 from '../assets/images/img_bg_3.jpg'

export default function Home() {
  return (
    <>
		<div class="container mt-2">
			<div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-bs-ride="carousel">
				<div class="carousel-indicators">
					<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
					<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
					<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div>
				<div class="carousel-inner">
					<div class="carousel-item active" data-bs-interval="1000">
					<img src={cara1} class="d-block w-100" alt="..."/>
					</div>
					<div class="carousel-item" data-bs-interval="1000">
					<img src={cara2} class="d-block w-100" alt="..."/>
					</div>
					<div class="carousel-item" data-bs-interval="1000">
					<img src={cara3} class="d-block w-100" alt="..."/>
					</div>
				</div>
				<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">NextS</span>
				</button>
			</div>
		</div>
	
            <div class="container">
				<div class="row mt-4">
					<div class="col-sm-8 offset-sm-2 text-center colorlib-heading">
						<h2>Best Sellers</h2>
					</div>
				</div>
				<div class="row row-pb-md">
					<div class="col-lg-3 mb-4 text-center">
						<div class="product-entry border">
							<a href="#" class="prod-img">
								<img src={require('../assets/images/item-1.jpg')} class="img-fluid" alt="Free html5 bootstrap 4 template"/>
							</a>
							<div class="desc">
								<h2><a href="#">Women's Boots Shoes Maca</a></h2>
								<span class="price">$139.00</span>
							</div>
						</div>
					</div>
					<div class="col-lg-3 mb-4 text-center">
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
					<div class="col-lg-3 mb-4 text-center">
						<div class="product-entry border">
							<a href="#" class="prod-img">
								<img src={require('../assets/images/item-3.jpg')} class="img-fluid" alt="Free html5 bootstrap 4 template"/>
							</a>
							<div class="desc">
								<h2><a href="#">Men's Taja Commissioner</a></h2>
								<span class="price">$139.00</span>
							</div>
						</div>
					</div>
					<div class="col-lg-3 mb-4 text-center">
						<div class="product-entry border">
							<a href="#" class="prod-img">
								<img src={require('../assets/images/item-4.jpg')} class="img-fluid" alt="Free html5 bootstrap 4 template"/>
							</a>
							<div class="desc">
								<h2><a href="#">Russ Men's Sneakers</a></h2>
								<span class="price">$139.00</span>
							</div>
						</div>
					</div>
					<div class="w-100"></div>
					<div class="col-lg-3 mb-4 text-center">
						<div class="product-entry border">
							<a href="#" class="prod-img">
								<img src={require('../assets/images/item-5.jpg')} class="img-fluid" alt="Free html5 bootstrap 4 template"/>
							</a>
							<div class="desc">
								<h2><a href="#">Women's Boots Shoes Maca</a></h2>
								<span class="price">$139.00</span>
							</div>
						</div>
					</div>
					<div class="col-lg-3 mb-4 text-center">
						<div class="product-entry border">
							<a href="#" class="prod-img">
								<img src={require('../assets/images/item-6.jpg')} class="img-fluid" alt="Free html5 bootstrap 4 template"/>
							</a>
							<div class="desc">
								<h2><a href="#">Women's Boots Shoes Maca</a></h2>
								<span class="price">$139.00</span>
							</div>
						</div>
					</div>
					<div class="col-lg-3 mb-4 text-center">
						<div class="product-entry border">
							<a href="#" class="prod-img">
								<img src={require('../assets/images/item-7.jpg')} class="img-fluid" alt="Free html5 bootstrap 4 template"/>
							</a>
							<div class="desc">
								<h2><a href="#">Women's Boots Shoes Maca</a></h2>
								<span class="price">$139.00</span>
							</div>
						</div>
					</div>
					<div class="col-lg-3 mb-4 text-center">
						<div class="product-entry border">
							<a href="#" class="prod-img">
								<img src={require('../assets/images/item-8.jpg')} class="img-fluid" alt="Free html5 bootstrap 4 template"/>
							</a>
							<div class="desc">
								<h2><a href="#">Women's Boots Shoes Maca</a></h2>
								<span class="price">$139.00</span>
							</div>
						</div>
					</div>
					<div class="w-100"></div>
					<div class="col-lg-3 mb-4 text-center">
						<div class="product-entry border">
							<a href="#" class="prod-img">
								<img src={require('../assets/images/item-9.jpg')} class="img-fluid" alt="Free html5 bootstrap 4 template"/>
							</a>
							<div class="desc">
								<h2><a href="#">Women's Boots Shoes Maca</a></h2>
								<span class="price">$139.00</span>
							</div>
						</div>
					</div>
					<div class="col-lg-3 mb-4 text-center">
						<div class="product-entry border">
							<a href="#" class="prod-img">
								<img src={require('../assets/images/item-10.jpg')} class="img-fluid" alt="Free html5 bootstrap 4 template"/>
							</a>
							<div class="desc">
								<h2><a href="#">Women's Boots Shoes Maca</a></h2>
								<span class="price">$139.00</span>
							</div>
						</div>
					</div>
					<div class="col-lg-3 mb-4 text-center">
						<div class="product-entry border">
							<a href="#" class="prod-img">
								<img src={require('../assets/images/item-11.jpg')} class="img-fluid" alt="Free html5 bootstrap 4 template"/>
							</a>
							<div class="desc">
								<h2><a href="#">Women's Boots Shoes Maca</a></h2>
								<span class="price">$139.00</span>
							</div>
						</div>
					</div>
					<div class="col-lg-3 mb-4 text-center">
						<div class="product-entry border">
							<a href="#" class="prod-img">
								<img src={require('../assets/images/item-12.jpg')} class="img-fluid" alt="Free html5 bootstrap 4 template"/>
							</a>
							<div class="desc">
								<h2><a href="#">Women's Boots Shoes Maca</a></h2>
								<span class="price">$139.00</span>
							</div>
						</div>
					</div>
					<div class="w-100"></div>
					<div class="col-lg-3 mb-4 text-center">
						<div class="product-entry border">
							<a href="#" class="prod-img">
								<img src={require('../assets/images/item-13.jpg')} class="img-fluid" alt="Free html5 bootstrap 4 template"/>
							</a>
							<div class="desc">
								<h2><a href="#">Women's Boots Shoes Maca</a></h2>
								<span class="price">$139.00</span>
							</div>
						</div>
					</div>
					<div class="col-lg-3 mb-4 text-center">
						<div class="product-entry border">
							<a href="#" class="prod-img">
								<img src={require('../assets/images/item-14.jpg')} class="img-fluid" alt="Free html5 bootstrap 4 template"/>
							</a>
							<div class="desc">
								<h2><a href="#">Women's Boots Shoes Maca</a></h2>
								<span class="price">$139.00</span>
							</div>
						</div>
					</div>
					<div class="col-lg-3 mb-4 text-center">
						<div class="product-entry border">
							<a href="#" class="prod-img">
								<img src={require('../assets/images/item-15.jpg')} class="img-fluid" alt="Free html5 bootstrap 4 template"/>
							</a>
							<div class="desc">
								<h2><a href="#">Women's Boots Shoes Maca</a></h2>
								<span class="price">$139.00</span>
							</div>
						</div>
					</div>
					<div class="col-lg-3 mb-4 text-center">
						<div class="product-entry border">
							<a href="#" class="prod-img">
								<img src={require('../assets/images/item-16.jpg')} class="img-fluid" alt="Free html5 bootstrap 4 template"/>
							</a>
							<div class="desc">
								<h2><a href="#">Women's Boots Shoes Maca</a></h2>
								<span class="price">$139.00</span>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12 text-center">
						<p><a href="#" class="btn btn-primary btn-lg">Shop All Products</a></p>
					</div>
				</div>
			</div>

			<div class="container mt-5">
				<div class="row">
					<div class="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
						<h2>Trusted Partners</h2>
					</div>
				</div>
				<div class="row">
					<div class="col partner-col text-center">
						<img src={require('../assets/images/brand-1.jpg')} class="img-fluid" alt="Free html4 bootstrap 4 template"/>
					</div>
					<div class="col partner-col text-center">
						<img src={require('../assets/images/brand-2.jpg')} class="img-fluid" alt="Free html4 bootstrap 4 template"/>
					</div>
					<div class="col partner-col text-center">
						<img src={require('../assets/images/brand-3.jpg')} class="img-fluid" alt="Free html4 bootstrap 4 template"/>
					</div>
					<div class="col partner-col text-center">
						<img src={require('../assets/images/brand-4.jpg')} class="img-fluid" alt="Free html4 bootstrap 4 template"/>
					</div>
					<div class="col partner-col text-center">
						<img src={require('../assets/images/brand-5.jpg')} class="img-fluid" alt="Free html4 bootstrap 4 template"/>
					</div>
				</div>
			</div>
    </>
  )
}
