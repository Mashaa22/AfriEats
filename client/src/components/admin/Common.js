import React, {useState, useEffect} from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './layout/Header.js';
import Sidebar from './layout/Sidebar.js';
import RecentOrders from './RecentOrders.js';
import "./Common.css";
import OrderDetails from './OrderDetails.js';
import MenuList from './MenuList.js';
import AddToMenu from './AddToMenu.js';
import EditMenu from './EditMenu.js';
import MyCart from '../MyCart'

function Common() {

  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch(`https://afrieats-app.onrender.com/auto_login?token=${token}`)
      .then(response => response.json())
      .then(data => {
        if (data.entity === 'admin' && data.admin) {
          setUserId(data.admin.id);
          
        } else if (data.entity === 'user' && data.user) { // Add this condition to log only admin data
          console.log('User Data:', data.user);
        } else {
          console.log('Invalid response:', data);
        }
        console.log('Data:', data);
      })
      .catch(error => console.log(error));
  }, []);

    return(
        <>
            <Header/>
                <div className="content-container">
                    <Sidebar/>
                        <div className="dashboard-container">
                            <Routes>
              <Route path="/dashboard" element={<RecentOrders adminId={userId} />}/>
                                <Route path="/order-details" element={<OrderDetails adminId={userId}/>}/>   
                                <Route path="/menu-list" element={<MenuList adminId={userId}/>}/>
                                <Route path="/add-menu" element={<AddToMenu resId={userId}/>}/> 
                                <Route path="/edit-menu" element={<EditMenu resId={userId}/>}/> 
                                <Route path='/logout' element={<MyCart/>}/> 
                            </Routes>
                        </div>
                </div>
                
            {/* </BrowserRouter> */}
      </>
    )
}

export default Common;