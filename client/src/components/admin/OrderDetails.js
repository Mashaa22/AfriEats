import React from 'react';
import "./OrderDetails.css";

function OrderDetails(){
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
                        <tr>
                            <th scope="row">#1</th>
                            <td>17-08-2023</td>
                            <td>Spence</td>
                            <td>$40</td>
                            <td>Delivered</td>
                            <td>View Details</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                        <th id="total" colspan="5">Total Purchase</th>
                        <td>$200</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}

export default OrderDetails;