import React, { useState, useEffect } from 'react';
import './MyCart.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import { Modal, Button } from "react-bootstrap";

function MyCart() {
    const [restaurant, setRestaurant] = useState({});
    const [course, setCourse] = useState({});
    const [total, setTotal] = useState(0);
    const [userId, setUserId] = useState(null);
    //const [quantity, setQuantity] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        date_of_delivery: '',
        status: '',
        price: '',
        quantity: '1',
        address: '',
    });

    const { id } = useParams();

    useEffect(() => {
        const fetchOrder = async () => {
        try {
            const response = await fetch(`https://afrieats-app.onrender.com/orders?user_id=${userId}`);
            const data = await response.json();
            const orders = data.map((order) => {
            return {
                name: order.name,
                price: order.price,
                id:order.id,
                quantity: order.quantity
            };
            });
            setCourse(orders);
        } catch (error) {
            console.error('Error fetching order:', error);
        }
        };

        const token = localStorage.getItem('token');
        if (token) {
        fetch(`https://afrieats-app.onrender.com/auto_login?token=${token}`)
            .then((response) => response.json())
            .then((data) => {
            if (data.entity === 'user' && data.user) {
                setUserId(data.user.id);
                setFormData({
                ...formData,
                user_id: data.user.id,
                });
                fetchOrder();
            } else {
                console.log('Invalid response:', data);
            }
            })
            .catch((error) => console.log(error));
        }
    }, [userId]);

//quantity increment and decrement handlers
const handleQuantityChange = (id, value) => {
    const newCartItems = course.map(item => {
      if (item.id === id) {
        return { ...item, quantity: parseInt(value) };
      }
      return item;
     
    });
    setCourse(newCartItems);
    calculateTotal();
  };
    const handleIncrement = (id) => {
        setCourse(courseOrder => {
        return course.map(order => {
            if (order.id === id) {
            return { ...order, quantity: order.quantity + 1 };
            } else {
            return order;
            }
        });
        });
        calculateTotal();
    };
    const handleDecrement = (id) => {
        setCourse(courseOrder => {
        return course.map(order => {
            if (order.id === id && order.quantity > 0) {
            return { ...order, quantity: order.quantity - 1 };
            } else {
            return order;
            }
        });
        });
        calculateTotal();
    };
    //get total price
    const TotalPrice = (price, quantity) => {
        return price * quantity;
    };

    const calculateTotal = () => {
        const newTotal = course.reduce((accumulator, item) => {
          return accumulator + item.price * item.quantity;
        }, 0);
        setTotal(newTotal);
      };

       //checkout
    const [deliveryAddress, setDeliveryAddress] = useState('');
    const handleAddressOnChange = (e) => {
        setDeliveryAddress(e.target.value);
    }

    const handleCheckout =()=>{
        setShowModal(true);
    };

    //checkout modal
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => {
      setShowModal(false);
      
    };
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
                    {Array.isArray(course) && course.length > 0 ? (
                        course.map((order, index) => (
                        <tr key={index}>
                            <th scope="row"><img /></th>
                            <td>{order.name}</td>
                            <td>{order.price}</td>
                            <td className="quantity">
                            <div className="input-group">
                                <span className="input-group-btn">
                                    <button type="button" id={`quantity-btn-${index}`} onClick={() => handleDecrement(order.id)} className="quantity-right-plus btn btn-number btn-sm" data-type="minus" data-field="">
                                        <span className="material-symbols-outlined">remove</span>
                                    </button>
                                </span>
                                <input
                                type="text"
                                id={`quantity-${index}`}
                                name={`quantity-${index}`}
                                className="form-control"
                                value={order.quantity}
                                onChange={(e) => handleQuantityChange(order.id, parseInt(e.target.value))}
                                style={{ width: "5px"}}
                                />
                                <span className="input-group-btn">
                                    <button type="button" id={`quantity-btn-${index}`} onClick={() => handleIncrement(order.id)} className="quantity-left-minus btn btn-number btn-sm" data-type="plus" data-field="">
                                        <span className="material-symbols-outlined">add</span>                                                                                              
                                    </button>
                                </span>
                            </div>
                            </td>
                            <td>`${TotalPrice(order.price, order.quantity)}`</td>
                        </tr>
                        ))
                    ) : (
                        <tr>
                        <td colSpan="5">No courses found.</td>
                        </tr>
                    )}
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
                    value={deliveryAddress}
                    onChange={handleAddressOnChange}
                    />
                </div>
                <div className='total'>
                    <h6>Cart Total</h6>
                    <p><span>Total:{total}</span></p>
                    <hr></hr>
                   
                    <button className='btn btn-warning btn-sm rounded' onClick={handleCheckout}>Checkout:$<span></span></button>
                   
                </div>
            </div>
            {(
                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title><strong>AfriEats Checkout</strong></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <ul className='checkout-modal'>
                                <li>Total: {total}</li>
                                <li>Delivery Address: {deliveryAddress}</li>
                                <li>Estimated delivery duration: 45mins</li>                                                                                                                                
                            </ul>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className='footer'>
                        <p>thank you for using AfriEats</p>
                        <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    )
}

export default MyCart;