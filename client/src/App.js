import { useEffect, useState, createContext } from "react";
import React from 'react';
import "./App.css";
import Login from "./components/Login";
// import Logout from "./components/Logout";
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
import { Route, Routes } from "react-router-dom";

import MyCart from './components/MyCart';
import Common from './components/admin/Common'

export const UserContext = createContext();
export const AdminContext = createContext();


function App() {
  const [user, setUser] = useState({});
  const [admin, setAdmin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  function setCurrentUser(currentUser) {
    setUser(currentUser);
    setLoggedIn(true);
    if (currentUser && currentUser.entity === 'admin') {
      setAdmin(true);
    }
  }
    
  useEffect(() => {
    const token = localStorage.getItem("token");
  
    if (token) {
      fetch('https://afrieats-app.onrender.com/auto_login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      })
      .then((response) => {
        if (response.status === 202) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        setCurrentUser(data.user);
        setAdmin(data.user.entity === "admin");
      })
      .catch((error) => {
        console.log('Error fetching auto_login:', error);
      });
    }
  }, []);

  return (
    <div className="App">
                  
      <UserContext.Provider value={[user, setUser]}>
        <AdminContext.Provider value={[admin, setAdmin]}>
          {!admin && <NavBar />}
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login setCurrentUser={setCurrentUser}/>} />
            <Route path="/adminsignup" element={<AdminSignup />} />
            <Route path="/adminlogin" element={<AdminLogin setCurrentUser={setCurrentUser} />} />
            <Route path="/home" element={<Home />} />
            <Route path="/meals" element={<Meals />} />
            <Route path="/order" element={<OrderStatus />} />
            <Route path="/order-history" element={<OrderHistory />} />
            <Route path="/restaurant-views/:id" element={<RestaurantView />} />
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
            <Common />
            </React.Fragment>
          )}
        </AdminContext.Provider>
      </UserContext.Provider>
    </div>
  );
  
}

  export default App;