import React, {useState, useEffect} from 'react';
import "./OrderDetails.css";
import { Modal, Button } from "react-bootstrap";

function OrderDetails(){
    const [orders, setOrders] = useState();
    const [details, setDetails] = useState({});
    //get orders
    useEffect(() => {
        fetch("/orders")
        .then(res => res.json())
        .then(response => {
        setOrders(response)
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
                <button className="btn btn-light btn-sm rounded-pill">Filter</button>
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
                                    <td>{order.date_of_delivery}</td>
                                    <td>{order.user.username}</td>
                                    <td>{order.price}</td>
                                    <td>{order.status}</td>
                                    <td onClick={()=>handleOrderClick(order)}>View Details</td>
                                </tr>
                            )})
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                        <th id="total" colspan="5">Total Purchase</th>
                        <td>$200</td>
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
                            <h3> Order for Spence</h3>
                            <p>
                                <strong>Order Date: {details.date_of_delivery}</strong>
                            </p>
                            <p>
                                <strong>Price: {details.price}</strong>
                            </p>
                            <p>Address: {details.address}</p>
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

export default OrderDetails;/**/