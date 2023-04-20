import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './layout/Header.js';
import Sidebar from './layout/Sidebar.js';
import RecentOrders from './RecentOrders.js';
import "./Common.css";
import OrderDetails from './OrderDetails.js';
import MenuList from './MenuList.js';
import AddToMenu from './AddToMenu.js';
import EditMenu from './EditMenu.js';

function Common(){
    return(
        <div className='container-flex'>
            <Header/>
                <div className="content-container">
                    <Sidebar/>
                        <div className="dashboard-container">
                            <Routes>
                                <Route path="/dashboard" element={<RecentOrders/>}/>
                                <Route path="/order-details" element={<OrderDetails/>}/>   
                                <Route path="/menu-list" element={<MenuList/>}/>
                                <Route path="/add-menu" element={<AddToMenu/>}/> 
                                <Route path="/edit-menu" element={<EditMenu/>}/>  
                            </Routes>
                        </div>
                </div>
        </div>
    )
}

export default Common;