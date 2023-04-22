import "./App.css";
import Login from "./components/Login";
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


import Header from './components/admin/layout/Header';
import Sidebar from './components/admin/layout/Sidebar';
import RecentOrders from './components/admin/RecentOrders';
import "./components/admin/Common.css";
import OrderDetails from './components/admin/OrderDetails';
import MenuList from './components/admin/MenuList';
import AddToMenu from './components/admin/AddToMenu';
import EditMenu from './components/admin/EditMenu';
import MyCart from './components/MyCart'

import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useEffect, useState, createContext } from "react";
import { mockUser, mockAdmin } from "./mockData";

export const UserContext = createContext();
export const AdminContext = createContext();
function App() {
  const [user, setUser] = useState(false);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    setUser(mockUser);
  }, []);

  useEffect(() => {
    setAdmin(mockAdmin);
  }, []);

  return (
    <div className="App">
      <UserContext.Provider value={[user, setUser]}>
        <AdminContext.Provider value={[admin, setAdmin]}>
        <NavBar/>
        {/* <BrowserRouter> */}

          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/adminsignup" element={<AdminSignup/>} ></Route>
            <Route path="/adminlogin" element={<AdminLogin />}></Route>
            {/* <Route path="/" element={<Navigate to="home" />} /> */}
            <Route path="/home" element={<Home />} />
            <Route path="/meals" element={<Meals />} />
            <Route path="/order" element={<OrderStatus />} />
            <Route path="/order-history" element={<OrderHistory />} />
            <Route path="/restaurant-views" element={<RestaurantView />} />
            <Route path="/restaurants" element={<Restaurant/>} />
            <Route path="/slides" element={<Slides />} />
            <Route path="/checkout" element={<Checkout />}/>
            <Route path="/notification" element={<Notification />} />
            <Route path='/cart' element={<MyCart/>}/> 

            
            <Route path="/dashboard" element={<RecentOrders/>}/>
            <Route path="/order-details" element={<OrderDetails/>}/>   
            <Route path="/menu-list" element={<MenuList/>}/>
            <Route path="/add-menu" element={<AddToMenu/>}/> 
            <Route path="/edit-menu" element={<EditMenu/>}/> 
            

  
            </Routes>
          {/* </BrowserRouter> */}
          <Footer />
        </AdminContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;


