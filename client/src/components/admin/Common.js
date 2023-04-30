import React from 'react';
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

function Common(){
    return(
        // <BrowserRouter>
        <>
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
                                <Route path='/logout' element={<MyCart/>}/> 
                            </Routes>
                        </div>
                </div>
                
            {/* </BrowserRouter> */}
      </>
    )
}

export default Common;