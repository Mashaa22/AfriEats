import { useEffect, useState, createContext } from "react";
import React from 'react';
import "./App.css";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Landing from "./components/Landing";
import Signup from "./components/Signup";
import AdminLogin from "./components/AdminLogin";
import AdminSignup from "./components/AdminSignup";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Meals from './components/Meals';
import OrderHistory from "./components/OrderHistory";
import OrderStatus from "./components/OrderStatus";
import RestaurantView from "./components/RestaurantView";
import Slides from "./components/Slides";
import Checkout from "./components/Checkout";
import Notification from "./components/Notification";
import Restaurant from "./components/Restaurant";
import About from "./components/About";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import { mockUser, mockAdmin } from "./mockData";
import Header from './components/admin/layout/Header';
import Sidebar from './components/admin/layout/Sidebar';
import RecentOrders from './components/admin/RecentOrders';
import "./components/admin/Common.css";
import OrderDetails from './components/admin/OrderDetails';
import MenuList from './components/admin/MenuList';
import AddToMenu from './components/admin/AddToMenu';
import EditMenu from './components/admin/EditMenu';
import MyCart from './components/MyCart';

export const UserContext = createContext();
export const AdminContext = createContext();

function App() {
  const [user, setUser] = useState({});
  const [admin, setAdmin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  function setCurrentUser(currentUser) {
    setUser(currentUser);
    setLoggedIn(true);
  }

  function logOut() {
    setUser({});
    setAdmin(false);
    setLoggedIn(false);
    localStorage.token = '';
  }

  useEffect(() => {
    const token = localStorage.token;
    if (typeof token !== 'undefined' && token.length > 1 && token !== 'undefined') {
      fetch('/auto_login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      })
        .then((r) => r.json())
        .then((user) => {
          if (user.admin) {
            setAdmin(true);
          }
          setCurrentUser(user);
        });
    } else {
      console.log('No token found, try logging in!');
    }
  }, []);

  return (
    <div className="App">
        {/* {loggedIn ? (
    <h1 className="greeting-text">Welcome back {user.username}!</h1>
  ): (
    <div className="please-log-in">
      <h3>Please log in!</h3>
    </div>
  )}   */}
      <UserContext.Provider value={[user, setUser]}>
        <AdminContext.Provider value={[admin, setAdmin]}>
          {!admin && <NavBar />}
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/adminsignup" element={<AdminSignup />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/home" element={<Home />} />
            <Route path="/meals" element={<Meals />} />
            <Route path="/order" element={<OrderStatus />} />
            <Route path="/order-history" element={<OrderHistory />} />
            <Route path="/restaurant-views" element={<RestaurantView />} />
            <Route path="/restaurants" element={<Restaurant />} />
            <Route path="/slides" element={<Slides />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/cart" element={<MyCart />} />
            <Route path="/about" element={<About />} />

          </Routes>
          {!admin && <Footer />}
          {admin && (
            <React.Fragment>
              <Header />
              <Sidebar />
              <Routes>
                <Route path="/dashboard" element={<RecentOrders />} />
                <Route path="/order-details" element={<OrderDetails />} />
                <Route path="/menu-list" element={<MenuList />} />
                <Route path="/add-menu" element={<AddToMenu />} />
                <Route path="/edit-menu" element={<EditMenu />} />
              </Routes>
            </React.Fragment>
          )}
        </AdminContext.Provider>
      </UserContext.Provider>
    </div>
  );
  
}

  export default App;