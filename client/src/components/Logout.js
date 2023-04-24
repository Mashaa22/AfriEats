import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AdminContext, UserContext } from "../App.js";

function Logout() {
const navigate = useNavigate();
const [user, setUser] = useContext(UserContext);
const [admin, setAdmin] = useContext(AdminContext);

const handleLogout = async (path, stateUpdater) => {
try {
const token = localStorage.getItem("token");
if (!token) {
navigate("/login");
return;
}

  const res = await fetch(path, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (res.status === 200) {
    localStorage.removeItem("token");
    stateUpdater(null);
    navigate("/login");
  } else {
    const error = new Error(res.statusText);
    error.response = res;
    throw error;
  }
} catch (err) {
  console.error(err);
  navigate("/login");
}

};

const handleUserLogout = () => {
if (user) {
handleLogout("/logout", setUser);
} else {
navigate("/login");
}
};

const handleAdminLogout = () => {
if (admin) {
handleLogout("/logout", setAdmin);
} else {
navigate("/adminlogin");
}
};

return (
<div>
<ul className="flex flex-col p-4 mt-4 border border-gray-100   md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
<button
       onClick={handleUserLogout}
       className="underline cursor-pointer"
     >
{user ? "User Logout" : "User Login"}
</button>
<button
       onClick={handleAdminLogout}
       className="underline cursor-pointer"
     >
{admin ? "Admin Logout" : "Admin Login"}
</button>
</ul>
</div>
);
}

export default Logout;