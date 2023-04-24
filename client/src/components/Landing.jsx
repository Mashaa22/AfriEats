import React from "react";

function Landing() {
  const backgroundStyle = {
    backgroundImage: "url('./images/covers.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px",
    // padding: "2rem"
  };

  const contentStyle = {
    padding: "3.5rem",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  

  const logoStyle = {
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
  //   // marginRight: "0.5rem"
  // };

  // const yellowStyle = {
  //   color: "yellow",
  //   fontSize: "2rem",
  //   fontWeight: "bold",
  //   fontFamily: "serif"
  // };

  return (
    <div style={backgroundStyle}>
      {/* <div style={logoStyle}>
        <span style={whiteStyle}>Afri</span>
        <span style={yellowStyle}>Eats</span>
      </div> */}
      <div style={contentStyle}>
        <p className="text-4xl font-bold text-yellow-500">
          We are giving your hunger new option, AfriEats is what you deserve.
        </p>
        <div className="flex justify-center mt-10 gap-8">
          <a
            href="/login"
            className="hover:bg-yellow-500 hover:border-none transition-all duration-500 text-white hover:text-white font-bold py-2 px-10 rounded-full border border-white"
          >
            Login
          </a>
          <a
            href="/signup"
            className="bg-yellow-500 hover:bg-transparent transition-all duration-500 hover:text-yellow-500 hover:border text-white font-bold py-2 px-10 rounded-full"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}

export default Landing;
