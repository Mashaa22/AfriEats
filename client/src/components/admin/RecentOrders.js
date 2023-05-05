import React, {useState, useEffect} from 'react';
import "./RecentOrders.css";

function RecentOrders({ adminId }) {
    // console.log(adminId);
    const [orders, setOrders] = useState();

    //get orders
    useEffect(() => {
        fetch("https://afrieats-app.onrender.com/admin_orders")
        .then(res => res.json())
        .then(response => {
        //fetch data only related to logged in admin
        const filteredData = response.filter(order => order.restaurant.id === adminId);
            setOrders(filteredData);
            console.log(filteredData)
        })
    }, [])

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
                        </tr>
                    </thead>
                    <tbody>
                        { orders && orders.map((order)=>{
                            return(
                                <tr>
                                    <th scope="row">{order.id}</th>
                                    <td>{order.user.username}</td>
                                    <td>{order.user.email}</td>
                                    <td>02-05-2023</td>
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