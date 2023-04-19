import React, { useState, useEffect } from 'react';
import "./MyCart.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function MyCart (){
    //increase and decrease quantity of an order
    const [num, setNum]= useState(1);
    const increaseNum =()=>{
        if(num<15)
        {
        setNum(Number(num)+1);
        }
    };
    let decreaseNum = () => {
        if(num>1)
        {
        setNum(num - 1);
        }
    }
    let handleChange = (e)=>{
    setNum(e.target.value);
    }
    return(
        <div className="my-cart">
            <div className="my-cart-image bg-info border d-flex aligns-items-center justify-content-center" style={{
                backgroundImage: `url('/images/mycart.png')`,
            }}>
                <p><span id='head-letter'>M</span>Y <span id='cart-letters'><span id='head-letter'>C</span>ART</span></p>
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
                                    <div className="input-group">
                                    <span className="input-group-btn">
                                        <button type="button" id='quantity-btn' onClick={increaseNum} className="quantity-left-minus btn btn-number btn-sm"  data-type="plus" data-field="">
                                            <span className="material-symbols-outlined">add</span>                                                                                              
                                        </button>
                                    </span>
                                    <input 
                                        type="text" 
                                        id="quantity" 
                                        name="quantity" 
                                        className="form-control" 
                                        value={num}
                                        onChange={handleChange}/>
                                    <span className="input-group-btn">
                                        <button type="button" id='quantity-btn' onClick={decreaseNum} className="quantity-right-plus btn btn-number  btn-sm" data-type="minus" data-field="">
                                            <span className="material-symbols-outlined">remove</span>
                                        </button>
                                    </span>
                                    </div>
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
                    <h6>Cart Total</h6>
                    <p><span>Total: $</span>53</p>
                    <hr></hr>
                    <button className='btn btn-warning btn-sm rounded'>Checkout:$<span>53</span></button>
                </div>
            </div>
        </div>
    )
}

export default MyCart;