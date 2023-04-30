import React, {useState, useEffect} from 'react';
import "./RecentOrders.css";

function RecentOrders(){
    const [orders, setOrders] = useState();

    //get orders
    useEffect(() => {
        fetch("/orders")
        .then(res => res.json())
        .then(response => {
        setOrders(response)
        console.log(response)
        })
    }, [])
    console.log(orders)
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
                        { orders && orders.map((order)=>{
                            return(
                                <tr>
                                    <th scope="row">{order.id}</th>
                                    <td>{ order.user.username}</td>
                                    <td>{ order.user.email}</td>
                                    <td>{order.date_of_delivery}</td>
                                    <td>{order.status}</td>
                                    <td><span class="material-symbols-outlined">
                                        download
                                        </span>
                                    </td>
                                </tr>
                            )})
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RecentOrders;