import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import "../../assets/frontend_assets/assets";
import { assets } from "../../assets/frontend_assets/assets";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div class="d-flex justify-content-between navbar">
      <div className="d-flex flex-column align-items-start">
        <div>
          <a class="navbar-brand" href="#">
            <img src={assets.logo} alt="" className="logo" />
          </a>
        </div>
        <div>
          <p className="fw-semibold para">Admin Panel</p>
        </div>
      </div>
      <div>
        <CgProfile className="profile" />
      </div>
    </div>
  );
};

export default Navbar;
