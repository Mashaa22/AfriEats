import React from 'react';
import "./RecentOrders.css";

function RecentOrders(){
    return(
        <div className='recent-orders'>
            <div className='title'>
                <h5>Recent Orders</h5>
            </div>
            <div className="table-responsive recent-orders-table">
                <table className="table table-hover">
                    <thead>
                        <tr className='head'>
                            <th>User ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Date of Order</th>
                            <th>Status</th>
                            <th>Invoice</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">#1</th>
                            <td>Spence</td>
                            <td>Spence@gmail.com</td>
                            <td>17-08-2023</td>
                            <td>Delivery</td>
                            <td><span class="material-symbols-outlined">
                                download
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RecentOrders;