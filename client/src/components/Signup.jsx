import React, { useState } from "react";
import { AiTwotoneMail } from "react-icons/ai";
import { GoKey } from "react-icons/go";
import { RiAccountCircleFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Signup() {
const navigate = useNavigate();
const [user, setUser] = useState({
username: "",
email: "",
password: "",
confirm_password: "",
});

// Get authentication status
const isAuthenticated = localStorage.getItem("token");

const handleRegister = async (event) => {
event.preventDefault();


// Redirect to login if user is not authenticated
if (!isAuthenticated) {
  navigate("/login");
  return;
}

try {
  const res = await fetch("/user/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user }),
  });

  if (res.status === 201) {
    const data = await res.json();
    localStorage.setItem("token", data.token);
    Swal.fire({
      title: "You have successfully registered the user.",
      icon: "success",
      timer: 2000,
    });
    setTimeout(() => navigate("/login"), 1000);
  } else {
    Swal.fire({
      title: "There was an error creating the user.",
      icon: "error",
      timer: 2000,
    });
  }
} catch (err) {
  console.error(err);
  Swal.fire({
    title: "There was an error creating the user.",
    icon: "error",
    timer: 2000,
  });
}
setUser({
  username: "",
  email: "",
  password: "",
  confirm_password: "",
});

};

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

  // const whiteStyle = {
  //   color: "white",
  //   fontSize: "2rem",
  //   fontWeight: "bold",
  //   fontFamily: "serif",
  //   // marginRight: "0.5rem",
  // };

  // const yellowStyle = {
  //   color: "yellow",
  //   fontSize: "2rem",
  //   fontWeight: "bold",
  //   fontFamily: "serif",
  // };

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
        {/* <Link to="/" className="hover:cursor-pointer">
          <span style={whiteStyle}>Afri</span>
          <span style={yellowStyle}>Eats</span>
        </Link> */}
      </div>
      <div className="mt-12 flex justify-between h-screen px -10 py-12">
        <div div className="flex">
          {/* Content for the left box */}
          <div className="h-full bg-yellow-500 opacity-75 justify-center md:w-3/4 sm:w-3/4 lg:w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 mx-4 flex items-center">
            <div className="w-full h-full flex justify-center items-center px-18 py-50 md:w-full text-center m-4">
              <div className="text-center">
                <h1 className="text-black font-bold text-5xl mb-16">
                  Join Us Now!!
                  <br className="mt-4" />
                  <br />
                  <span className="text-6xl">🥳🎉</span>
                </h1>

                {/* <p className="text-white">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
                  illum eius, aspernatur reprehenderit soluta vitae obcaecati
                  provident sed vel, quam facere fuga quibusdam beatae.
                  Perferendis molestias corporis omnis aperiam ad!
                </p> */}
                {/* <div className="text-black font-bold">
                  The Best Choice You Will Make!
                </div> */}
              </div>
            </div>
          </div>
          <div className="w-3/4 h-full flex flex-col items-center justify-center px-18 py-50  md:w-full lg:py-0 mr-6">
            <div className=" w-full h-full flex flex-col justify-center items-center bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0" style={{ padding: "40px" }}>
              <div  className="space-y-4 md:space-y-6 w-full"  style={{ width: "100%", maxWidth: "700px" }}>
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl justify-center items-center">
                  Create Account
                </h1>
                <form
                  onSubmit={handleRegister}
                  className="grid grid-cols-1 gap-3 "
                  style={{ maxWidth: "700px" }}
                >
                  <div className="flex flex-col">
                    <label
                      htmlFor="username"
                      className="mb-2 text-sm font-medium text-gray-900"
                    ></label>
                    <div className="flex flex-row items-center">
                      <div className="py-2.5 mr-1 px-3 border border-black rounded-lg">
                        <RiAccountCircleFill />
                      </div>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="username"
                        value={user.username}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5"
                        required
                        onChange={(event) =>
                          setUser((prevState) => ({
                            ...prevState,
                            username: event.target.value
                        }))}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 text-sm font-medium text-gray-900"
                    ></label>
                    <div className="flex flex-row items-center">
                      <div className="py-2.5 mr-1 px-3 border border-black rounded-lg">
                        <AiTwotoneMail />
                      </div>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="email"
                        value={user.email}
                        onChange={(event) =>
                          setUser((prevState) => ({
                            ...prevState,
                            email: event.target.value,
                          }))
                        }
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="mb-2 text-sm font-medium text-gray-900"
                    ></label>
                    <div className="flex flex-row items-center">
                      <div className="py-2.5 mr-1 px-3 border border-black rounded-lg">
                        <GoKey />
                      </div>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="password"
                        value={user.password}
                        onChange={(event) =>
                          setUser((prevState) => ({
                            ...prevState,
                            password: event.target.value,
                          }))
                        }
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="mb-2 text-sm font-medium text-gray-900"
                    ></label>
                    <div className="flex flex-row items-center">
                      <div className="py-2.5 mr-1 px-3 border border-black rounded-lg">
                       <GoKey />
                      </div>
                      <input
                        type="password"
                        name="confirm_password"
                        id="confirm_password"
                        placeholder="confirm password"
                        value={user.confirm_password}
                        onChange={(event) =>
                          setUser((prevState) => ({
                            ...prevState,
                            confirm_password: event.target.value,
                          }))
                        }
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5"
                        required
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-yellow-500 font-bold text-gray-800 p-2 rounded-full"
                  >
                    Register account
                  </button>
                </form>
                
                <div className="flex flex-col-reverse items-center">
                  <Link to="/adminsignup" className="hover:underline text-black-500">
                    Sign up as a Restaurant Owner
                  </Link>
                  <Link to="/login" className=" m-2 hover:underline text-black-500">
                    Already have an account? Login
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

export default Signup;

