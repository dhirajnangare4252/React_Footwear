import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState({})

  useEffect(() => {
    if (id) {
      axios.get("https://663daf9be1913c4767950554.mockapi.io/footwear/" + id)
        .then((res) => {
          console.log(res.data);
		  setProduct(res.data)
        });
    }
  }, []);

  return (
    <div>
      <div id="page">
        <div class="colorlib-product">
          <div class="container">
            <div class="row row-pb-lg product-detail-wrap">
              <div class="col-sm-7">
                <div class="owl-carousel">
                  <div class="item">
                    <div class="product-entry">
                      <a href="#" class="prod-img" style={{marginLeft:"130px"}}>
                        <img src={product.image} style={{height:"400px",width:"400px"}} class="img-fluid" alt="Free html5 bootstrap 4 template"/>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-5">
                <div class="product-desc">
                  <h3>{product.brand} {product.category} {product.title}</h3>                                                 
                  <p class="price">                                                                               
				  <span class="price">&#8377;{product.price} &nbsp; <del>&#8377;{product.mrp}</del></span>      
				  <p class="price">
								<span class="rate">
								    <i class="fa-solid fa-star"></i>    
								    <i class="fa-solid fa-star"></i>    
								    <i class="fa-solid fa-star"></i>    
								    <i class="fa-solid fa-star"></i>    
								    <i class="fa-solid fa-star"></i>    
									
									&nbsp;(74 Rating)
								</span>
							</p>
                  </p>
                  <p style={{textAlign:"justify"}}>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life One day
                    however a small line of blind text by the name of Lorem
                    Ipsum decided to leave for the far World of Grammar.
                  </p>
                  <div class="size-wrap">
                    <div class="block-26 mb-2">
                      <div style={{display:"flex"}}>
					  <h3>Category</h3>&nbsp; &nbsp; &nbsp;<h4><u>{product.category}</u></h4> 
					  </div>
                      {/* <ul>
                        <li><a href="#">{product.category}</a></li>          
                      </ul> */}
                    </div>
                    <div class="block-26 mb-4">
                      <h4>Size</h4>
                      <ul>
                        <li>
                          <a href="#">{product.size}</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="input-group mb-4">
                    <span class="input-group-btn">
                      <button
                        type="button"
                        class="quantity-left-minus btn"
                        data-type="minus"
                        data-field=""
                      >
                        <i class="fa-solid fa-minus"></i>
                      </button>
                    </span>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      class="form-control input-number"               
                      value="1"
                      min="1"
                      max="100"
                    />
                    <span class="input-group-btn ml-1">
                      <button type="button" class="quantity-right-plus btn" data-type="plus" data-field="">
                        <i class="fa-solid fa-plus"></i>
                      </button>
                    </span>
                  </div>
                  <div class="row">
                    <div class="col-sm-12 text-center">
                      <p class="addtocart">
                        <a
                          href="cart.html"
                          class="btn btn-primary btn-addtocart"
                        >
                          <i class="icon-shopping-cart"></i> Add to Cart
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-12">
                <div class="row">
                  <div class="col-md-12 pills">
                    <div class="bd-example bd-example-tabs">
                      <ul
                        class="nav nav-pills mb-3"
                        id="pills-tab"
                        role="tablist"
                      >
                        <li class="nav-item">
                          <a
                            class="nav-link active"
                            id="pills-description-tab"
                            data-toggle="pill"
                            href="#pills-description"
                            role="tab"
                            aria-controls="pills-description"
                            aria-expanded="true"
                          >
                            Description
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link"
                            id="pills-manufacturer-tab"
                            data-toggle="pill"
                            href="#pills-manufacturer"
                            role="tab"
                            aria-controls="pills-manufacturer"
                            aria-expanded="true"
                          >
                            Manufacturer
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link"
                            id="pills-review-tab"
                            data-toggle="pill"
                            href="#pills-review"
                            role="tab"
                            aria-controls="pills-review"
                            aria-expanded="true"
                          >
                            Review
                          </a>
                        </li>
                      </ul>

                      <div class="tab-content" id="pills-tabContent">
                        <div
                          class="tab-pane border fade show active"
                          id="pills-description"
                          role="tabpanel"
                          aria-labelledby="pills-description-tab"
                        >
                          <p>
                            Even the all-powerful Pointing has no control about
                            the blind texts it is an almost unorthographic life
                            One day however a small line of blind text by the
                            name of Lorem Ipsum decided to leave for the far
                            World of Grammar.
                          </p>
                          <p>
                            When she reached the first hills of the Italic
                            Mountains, she had a last view back on the skyline
                            of her hometown Bookmarksgrove, the headline of
                            Alphabet Village and the subline of her own road,
                            the Line Lane. Pityful a rethoric question ran over
                            her cheek, then she continued her way.
                          </p>
                          <ul>
                            <li>The Big Oxmox advised her not to do so</li>
                            <li>Because there were thousands of bad Commas</li>
                            <li>Wild Question Marks and devious Semikoli</li>
                            <li>She packed her seven versalia</li>
                            <li>
                              tial into the belt and made herself on the way.
                            </li>
                          </ul>
                        </div>

                        <div
                          class="tab-pane border fade"
                          id="pills-manufacturer"
                          role="tabpanel"
                          aria-labelledby="pills-manufacturer-tab"
                        >
                          <p>
                            Even the all-powerful Pointing has no control about
                            the blind texts it is an almost unorthographic life
                            One day however a small line of blind text by the
                            name of Lorem Ipsum decided to leave for the far
                            World of Grammar.
                          </p>
                          <p>
                            When she reached the first hills of the Italic
                            Mountains, she had a last view back on the skyline
                            of her hometown Bookmarksgrove, the headline of
                            Alphabet Village and the subline of her own road,
                            the Line Lane. Pityful a rethoric question ran over
                            her cheek, then she continued her way.
                          </p>
                        </div>

                        <div
                          class="tab-pane border fade"
                          id="pills-review"
                          role="tabpanel"
                          aria-labelledby="pills-review-tab"
                        >
                          <div class="row">
                            <div class="col-md-8">
                              <h3 class="head">23 Reviews</h3>
                              <div class="review">
                                <div
                                  class="user-img"
                                  style={{
                                    backgroundImage: " url(images/person1.jpg)",
                                  }}
                                ></div>
                                <div class="desc">
                                  <h4>
                                    <span class="text-left">Jacob Webb</span>
                                    <span class="text-right">
                                      14 March 2018
                                    </span>
                                  </h4>
                                  <p class="star">
                                    <span>
                                      <i class="icon-star-full"></i>
                                      <i class="icon-star-full"></i>
                                      <i class="icon-star-full"></i>
                                      <i class="icon-star-half"></i>
                                      <i class="icon-star-empty"></i>
                                    </span>
                                    <span class="text-right">
                                      <a href="#" class="reply">
                                        <i class="icon-reply"></i>
                                      </a>
                                    </span>
                                  </p>
                                  <p>
                                    When she reached the first hills of the
                                    Italic Mountains, she had a last view back
                                    on the skyline of her hometown Bookmarksgrov
                                  </p>
                                </div>
                              </div>
                              <div class="review">
                                <div
                                  class="user-img"
                                  style={{
                                    backgroundImage: " url(images/person1.jpg)",
                                  }}
                                ></div>
                                <div class="desc">
                                  <h4>
                                    <span class="text-left">Jacob Webb</span>
                                    <span class="text-right">
                                      14 March 2018
                                    </span>
                                  </h4>
                                  <p class="star">
                                    <span>
                                      <i class="icon-star-full"></i>
                                      <i class="icon-star-full"></i>
                                      <i class="icon-star-full"></i>
                                      <i class="icon-star-half"></i>
                                      <i class="icon-star-empty"></i>
                                    </span>
                                    <span class="text-right">
                                      <a href="#" class="reply">
                                        <i class="icon-reply"></i>
                                      </a>
                                    </span>
                                  </p>
                                  <p>
                                    When she reached the first hills of the
                                    Italic Mountains, she had a last view back
                                    on the skyline of her hometown Bookmarksgrov
                                  </p>
                                </div>
                              </div>
                              <div class="review">
                                <div
                                  class="user-img"
                                  style={{
                                    backgroundImage: " url(images/person1.jpg)",
                                  }}
                                ></div>
                                <div class="desc">
                                  <h4>
                                    <span class="text-left">Jacob Webb</span>
                                    <span class="text-right">
                                      14 March 2018
                                    </span>
                                  </h4>
                                  <p class="star">
                                    <span>
                                      <i class="icon-star-full"></i>
                                      <i class="icon-star-full"></i>
                                      <i class="icon-star-full"></i>
                                      <i class="icon-star-half"></i>
                                      <i class="icon-star-empty"></i>
                                    </span>
                                    <span class="text-right">
                                      <a href="#" class="reply">
                                        <i class="icon-reply"></i>
                                      </a>
                                    </span>
                                  </p>
                                  <p>
                                    When she reached the first hills of the
                                    Italic Mountains, she had a last view back
                                    on the skyline of her hometown Bookmarksgrov
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-4">
                              <div class="rating-wrap">
                                <h3 class="head">Give a Review</h3>
                                <div class="wrap">
                                  <p class="star">
                                    <span>
                                      <i class="icon-star-full"></i>
                                      <i class="icon-star-full"></i>
                                      <i class="icon-star-full"></i>
                                      <i class="icon-star-full"></i>
                                      <i class="icon-star-full"></i>
                                      (98%)
                                    </span>
                                    <span>20 Reviews</span>
                                  </p>
                                  <p class="star">
                                    <span>
                                      <i class="icon-star-full"></i>
                                      <i class="icon-star-full"></i>
                                      <i class="icon-star-full"></i>
                                      <i class="icon-star-full"></i>
                                      <i class="icon-star-empty"></i>
                                      (85%)
                                    </span>
                                    <span>10 Reviews</span>
                                  </p>
                                  <p class="star">
                                    <span>
                                      <i class="icon-star-full"></i>
                                      <i class="icon-star-full"></i>
                                      <i class="icon-star-full"></i>
                                      <i class="icon-star-empty"></i>
                                      <i class="icon-star-empty"></i>
                                      (70%)
                                    </span>
                                    <span>5 Reviews</span>
                                  </p>
                                  <p class="star">
                                    <span>
                                      <i class="icon-star-full"></i>
                                      <i class="icon-star-full"></i>
                                      <i class="icon-star-empty"></i>
                                      <i class="icon-star-empty"></i>
                                      <i class="icon-star-empty"></i>
                                      (10%)
                                    </span>
                                    <span>0 Reviews</span>
                                  </p>
                                  <p class="star">
                                    <span>
                                      <i class="icon-star-full"></i>
                                      <i class="icon-star-empty"></i>
                                      <i class="icon-star-empty"></i>
                                      <i class="icon-star-empty"></i>
                                      <i class="icon-star-empty"></i>
                                      (0%)
                                    </span>
                                    <span>0 Reviews</span>
                                  </p>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
