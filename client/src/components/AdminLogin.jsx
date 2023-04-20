import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AdminContext } from "../App";

// Mock data
const mockData = {
  username: "jebby",
  email: "admin@example.com",
  password: "admin123",
  pin: "ADMIN123",
};

function AdminLogin() {
  const navigate = useNavigate();
  const [admin, setAdmin] = useContext(AdminContext);
  const [login, setLogin] = useState({
    username: "",
    email: "",
    password: "",
    pin: "",
  });

  function handleLogin(event) {
    event.preventDefault();

    // Check if the input matches the mock data
    if (
      login.email === mockData.email &&
      login.password === mockData.password
    ) {
      setTimeout(() => navigate("/"), 1000);
      setAdmin(true);
    } else {
      Swal.fire({
        title: "Wrong password or email",
        icon: "error",
        timer: 2000,
      });
    }

    // Reset the input fields
    setLogin({
      username: "",
      email: "",
      password: "",
      pin: "",
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
                   Admin Login
                </h1>
                <form
                  className="bg-white p-6 rounded-lg shadow-md"
                  onSubmit={handleLogin}
                >
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="email"
                    ></label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="email"
                      id="email"
                      value={login.username}
                      placeholder="username"
                      onChange={(event) =>
                        setLogin((prevState) => ({
                          ...prevState,
                          email: event.target.value,
                        }))
                      }
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="password"
                    ></label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="password"
                      id="password"
                      placeholder="Password"
                      value={login.password}
                      onChange={(event) =>
                        setLogin((prevState) => ({
                          ...prevState,
                          password: event.target.value,
                        }))
                      }
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="password"
                    ></label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="pin"
                      id="pin"
                      placeholder="Pin"
                      value={login.pin}
                      onChange={(event) =>
                        setLogin((prevState) => ({
                          ...prevState,
                          pin: event.target.value,
                        }))
                      }
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-yellow-500 font-bold text-gray-800 p-2 rounded-full"
                  >
                    Login
                  </button>
                  <div className="mt-4 text-center flex  flex-col justify-between">
                    <Link
                      className="text-black-500 hover:text-black-700"
                      to="/adminsignup "
                    >
                      <span className="text-black">
                        Don't have an account?{" "}
                      </span>
                      Sign up
                    </Link>
                    <Link to="/" className="underline text-black-500">
                      Homepage
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

export default AdminLogin;
