import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { GiPadlock } from "react-icons/gi";
import { RiAccountCircleFill } from "react-icons/ri";
import { UserContext } from "../App.js";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useContext(UserContext);
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  console.log("daisy");
  function handleLogin(event) {
    event.preventDefault();

    // Mock data
    const mockData = {
      username: "daisy",
      password: "password123",
    };

    // Check if the login credentials are correct
    if (
      login.username === mockData.username &&
      login.password === mockData.password
    ) {
      setTimeout(() => navigate("/"), 1000);
      setUser(true);
    } else {
      Swal.fire({
        title: "Wrong password or username",
        icon: "error",
        timer: 2000,
      });
    }

    // Clear the login form
    setLogin({
      username: "",
      password: "",
    });
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
  console.log(setLogin);
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
                <h1 className="text-black  font-bold text-4xl mb-16">
                  Welcome Back!
                </h1>
                <p className="text-white">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
                  illum eius, aspernatur reprehenderit soluta vitae obcaecati
                  provident sed vel, quam facere fuga quibusdam beatae.
                  Perferendis molestias corporis omnis aperiam ad!
                </p>
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
                  Login
                </h1>
                <form onSubmit={handleLogin} className="space-y-4 md:space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    ></label>
                    <div className="flex flex-row items-center">
                      <div className="py-2.5 mr-1 px-3 border border-black rounded-lg">
                        <RiAccountCircleFill />
                      </div>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        value={login.username}
                        onChange={(event) =>
                          setLogin((prevState) => ({
                            ...prevState,
                            admission_number: event.target.value,
                          }))
                        }
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="daisy"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Password
                    </label>
                    <div className="flex flex-row items-center">
                      <div className="py-2.5 mr-1 px-3 border border-black rounded-lg">
                        <GiPadlock />
                      </div>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        value={login.password}
                        onChange={(event) =>
                          setLogin((prevState) => ({
                            ...prevState,
                            password: event.target.value,
                          }))
                        }
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        required
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-yellow-500 font-bold text-gray-800 p-2 rounded-full"
                  >
                    Login
                  </button>
                </form>
                <div className="flex justify-between">
                  <Link to="/" className="underline text-black-500">
                    Dont have an account yet?
                  </Link>
                  <Link to="/adminlogin" className="underline text-black-500">
                    Login as a Restaurant Owner
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
