import "./App.css";
import Login from "./components/Login";
import Landing from "./components/Landing";
import Signup from "./components/Signup";
import AdminLogin from "./components/AdminLogin";
import AdminSignup from "./components/AdminSignup";


import AdminLogin from "./components/AdminLogin";

import { Route, Routes } from "react-router-dom";
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
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/adminsignup" element={<AdminSignup/>} ></Route>
            <Route path="/adminlogin" element={<AdminLogin />}></Route>
          </Routes>
        </AdminContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;