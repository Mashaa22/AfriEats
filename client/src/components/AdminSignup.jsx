import React, { useState } from "react";
import { Link } from "react-router-dom";
import Landing from "./Landing";

function AdminSignup() {
  const [admin, setAdmin] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isSignedUp, setIsSignedUp] = useState(false);

  const admins_params = () => {
    return {
      admin: {
        name: admin.name,
        email: admin.email,
        password: admin.password,
      },
    };
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log({ admin });
    try {
      const response = await fetch("/admins", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(admins_params()),
      });
      const data = await response.json();
      console.log("Success:", data);
      setIsSignedUp(true);
      setAdmin({
        name: "",
        email: "",
        password: "",
      });
      window.location.href = "/"; // Navigate to admin dashboard page
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (isSignedUp) {
    return <Landing />;
  }
  const logoStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignSelf: "flex-start",
    marginBottom: "auto",
  };

  const whiteStyle = {
    color: "white",
    fontSize: "2rem",
    fontWeight: "bold",
    fontFamily: "serif",
    marginRight: "0.5rem",
  };

  const yellowStyle = {
    color: "yellow",
    fontSize: "2rem",
    fontWeight: "bold",
    fontFamily: "serif",
  };

  return (
    <section
      className="h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('./images/cover.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div style={logoStyle}>
        <span style={whiteStyle}>Afri</span>
        <span style={yellowStyle}>Eats</span>
      </div>
      <div className="flex justify-between h-screen  px -10 py-12">
        <div div className="flex">
          {/* Content for the left box */}
          <div className="w-3/4 bg-yellow-200 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 mx-4 flex items-center">
            <div className="mx-auto text-center">
              <div className="text-center">
              <h1 className="text-black font-bold text-5xl mb-16">
                  Join Us Now As Restaurant Owner!!
                  <br className="mt-4" />
                  <span className="text-6xl">🥳🎉</span>
                </h1>
                {/* <p className="text-white">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
                  illum eius, aspernatur reprehenderit soluta vitae obcaecati
                  provident sed vel, quam facere fuga quibusdam beatae.
                  Perferendis molestias corporis omnis aperiam ad!
                </p> */}
                <div className="text-black font-bold">
                  The Best Choice You Will Make!
                </div>
              </div>
            </div>
          </div>
          <div className="h-full  flex flex-col items-center justify-center px-18 py-50 md:w-full lg:py-0">
            <div className="w-full h-full  flex justif-center items-center bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                   Admin Login
                </h1>
            <form
              className="bg-white p-6 rounded-lg shadow-md"
              onSubmit={handleSubmit}
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="username"
                >
        
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id="username"
                  placeholder="username"
                  value={admin.name}
                  onChange={(e) => setAdmin({ ...admin, name: e.target.value })}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="email"
                >
                
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  id="email"
                  placeholder="email"
                  value={admin.email}
                  onChange={(e) =>
                    setAdmin({ ...admin, email: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="password"
                >
                  
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  id="password"
                  placeholder="password"
                  value={admin.password}
                  onChange={(e) =>
                    setAdmin({ ...admin, password: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="confirm_password"
                >
                  
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="confirm_password"
                  id="confirm_password"
                  placeholder="confirm_password"
                  value={admin.confirm_password}
                  onChange={(e) =>
                    setAdmin({ ...admin, password: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="pin"
                >
                  
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="pin"
                  id="pin"
                  placeholder="pin"
                  value={admin.password}
                  onChange={(e) =>
                    setAdmin({ ...admin, password: e.target.value })
                  }
                  required
                />
              </div>
              <button
                    type="submit"
                    className="w-full bg-yellow-500 font-bold text-gray-800 p-2 rounded-full"
                  >
                    Signup
                  </button>
              <div className="mt-4 text-center">
                Already have an account?{" "}
                <Link to="/adminlogin" className="text-blue-500 underline">
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
      </div>
    </section>
  );
}

export default AdminSignup;
