import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header
      className="col-md-12 "
      style={{ marginBottom: "20px", marginTop: "20px" }}
    >
      <div className="d-flex justify-content-center align-items-center">
        <img
          className="text-center"
          style={{ width: "30%", margin: "auto" }}
          src={logo}
          alt="Logicstics UK Logo"
        />
      </div>
    </header>
  );
};

export default Header;
