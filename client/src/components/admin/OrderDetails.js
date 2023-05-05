import React, {useState, useEffect} from 'react';
import "./OrderDetails.css";
import { Modal, Button } from "react-bootstrap";

function OrderDetails({adminId}){
    const [orders, setOrders] = useState();
    const [details, setDetails] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    //get orders
    useEffect(() => {
        fetch("https://afrieats-app.onrender.com/admin_orders")
        .then(res => res.json())
        .then(response => {
        //fetch data only related to logged in admin
        const filteredData = response.filter(order => order.restaurant.id === adminId);
        setOrders(filteredData);
        const totalPrice = filteredData.reduce((total, order) => total + order.price, 0);
        setTotalPrice(totalPrice);
        })
    }, [])
    
    //display details on clicked order
    const [showModal, setShowModal] = useState(false);

    const handleOrderClick = (order) => {
        setDetails(order);
        console.log(order)
        console.log(details)
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };
    
    return(
        <div className='order-details'>
            <div className='title'>
                <h5>Order Details</h5>
            </div>
            <div className="table-responsive orders-table">
                <table className="table table-hover">
                    <thead>
                        <tr className='head'>
                            <th>User ID</th>
                            <th>Date of Order</th>
                            <th>Customer</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Order Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        { orders && orders.map((order)=>{
                            return(
                                <tr>
                                    <th scope="row">{order.id}</th>
                                    <td>02-05-2023</td>
                                    <td>{ order.user.username}</td>
                                    <td>{order.price}</td>
                                    <td>pending</td>
                                    <td onClick={()=>handleOrderClick(order)}>View Details</td>
                                </tr>
                            )})
                        }
                    </tbody>
                    <tfoot>
                      <tr>
                        <th id="total" colspan="5">Total Purchase</th>
                         <td>${totalPrice}</td>
                     </tr>
                    </tfoot>
                </table> 
            </div>
            {(
                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Order Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <ul className='details-modal'>
                                <li>Order for: </li>
                                <li>Order name: </li>
                                <li>Order description:  </li>
                                <li>Order Date: {details.date_of_delivery}</li>
                                <li>Price: {details.price}</li>
                                <li>Delivery Address: {details.address}</li>
                                <li></li>
                            </ul>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    )
}

export default OrderDetails;