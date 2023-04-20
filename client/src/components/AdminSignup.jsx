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
    // marginRight: "0.5rem",
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
          <div className="md:w-3/4 sm:w-3/4 lg:w-full bg-yellow-500 opacity-75 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 mx-4 flex items-center">
            <div className="mx-auto text-center m-4">
              <div className="text-center m-4">
              <h1 className="text-black font-bold text-5xl mb-16">
                  Join Us Now As Restaurant Owner!!
                  <br className="m-4" />
                  <br />
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
          <div className="w-3/4 h-full flex flex-col items-center justify-center px-18 py-50  md:w-full lg:py-0 mr-6">
            <div className="w-full h-full  flex justify-center items-center bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 " style={{ padding: "40px" }}>
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-full"  style={{ width: "100%", maxWidth: "700px" }}>
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                   Admin Sign Up
                </h1>
            <form
              className="grid grid-cols-1 gap-3 "
              onSubmit={handleSubmit}
              style={{maxWidth: "700px"}}
            >
              <div className="flex flex-col">
                <label
                  className="mb-2 text-sm font-medium text-gray-900"
                  htmlFor="username"
                ></label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5"
                  type="text"
                  id="username"
                  placeholder="username"
                  value={admin.name}
                  onChange={(e) => setAdmin({ ...admin, name: e.target.value })}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="email"
                ></label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5"
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
              <div className="flex flex-col">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="password"
                ></label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5"
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
              <div className="flex flex-col">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="confirm_password"
                ></label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5"
                  type="confirm_password"
                  id="confirm_password"
                  placeholder="confirm password"
                  value={admin.confirm_password}
                  onChange={(e) =>
                    setAdmin({ ...admin, password: e.target.value })
                  }
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="pin"
                ></label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5"
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
              <div className="flex flex-col-reverse">
                <div className="flex flex-col mt-4 text-center">
                  <Link to="/adminlogin" className="text-black hover:underline">
                    Already have an account?{" "} Login
                  </Link>
                </div>
                <div className="flex flex-col mt-4 text-center">
                  <Link to="/signup" className="text-black hover:underline">
                    Sign up as a customer
                  </Link>
                </div>
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
