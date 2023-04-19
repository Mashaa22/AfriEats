import React, { useState, useEffect } from 'react';
import "./MyCart.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function MyCart (){
    return(
        <div className="my-cart">
            <div className="my-cart-image bg-info border d-flex aligns-items-center justify-content-center" style={{
                backgroundImage: `url('/images/mycart.png')`,
            }}>
                <p>MY CART</p>
            </div>
            <div className="table-responsive cart-table">
                <table className="table table-borderless">
                    <thead>
                        <tr className='head'>
                            <th></th>
                            <th>Food</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"><img src='https://i.pinimg.com/736x/2d/b8/fb/2db8fb0232bb507e6789fd7f07d2d9fa.jpg'></img></th>
                            <td>
                                <ul className='list-unstyled'>
                                    <li>KFC</li>
                                    <li>Chicken burger</li>
                                </ul>
                            </td>
                            <td>10$</td>
                            <td className='quantity'>
                                <span className="col-lg-2 ">
                                    <div className="input-group">
                                    <span className="input-group-btn">
                                        <button type="button" id='quantity-btn' className="quantity-left-minus btn btn-number btn-sm"  data-type="minus" data-field="">
                                            <span className="material-symbols-outlined">add</span>                                                                                              
                                        </button>
                                    </span>
                                    <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" min="1" max="100"/>
                                    <span className="input-group-btn">
                                        <button type="button" id='quantity-btn' className="quantity-right-plus btn btn-number  btn-sm" data-type="plus" data-field="">
                                            <span className="material-symbols-outlined">remove</span>
                                        </button>
                                    </span>
                                    </div>
                                </span>
                            </td>
                            <td>20$</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='cart-bottom'>
                <div className="form-group delivery-address">
                    <label htmlFor='delivery-address'>Delivery Address</label>                
                    <input 
                    type="text" 
                    name='delivery-address' 
                    className="form-control"
                    />
                </div>
                <div className='total'>
                    <h6>Cart Totals</h6>
                    <p><span>Total $</span>53</p>
                    <hr></hr>
                    <button className='btn btn-warning btn-sm rounded'>Checkout:$<span>53</span></button>
                </div>
            </div>
        </div>
    )
}

export default MyCart;