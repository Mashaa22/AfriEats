import React from "react";

function Landing() {
  const backgroundStyle = {
    backgroundImage: "url('./images/cover.png')",
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
    padding: "2rem",
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
  

  const whiteStyle = {
    color: "white",
    fontSize: "2rem",
    fontWeight: "bold",
    fontFamily: "serif",
    marginRight: "0.5rem"
  };

  const yellowStyle = {
    color: "yellow",
    fontSize: "2rem",
    fontWeight: "bold",
    fontFamily: "serif"
  };

  return (
    <div style={backgroundStyle}>
      <div style={logoStyle}>
        <span style={whiteStyle}>Afri</span>
        <span style={yellowStyle}>Eats</span>
      </div>
      <div style={contentStyle}>
        <p className="text-2xl text-white">
          We are giving your hunger new option, AfriEats is what you deserve.
        </p>
        <div className="flex justify-center mt-10 gap-8">
          <a
            href="/login"
            className="bg-white-500 hover:bg-blue-700 text-blue-700 hover:text-white font-bold py-2 px-10 rounded-full border-2 border-white"
          >
            Login
          </a>
          <a
            href="/signup"
            className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full"
          >
            Signup
          </a>
        </div>
      </div>
    </div>
  );
}

export default Landing;
