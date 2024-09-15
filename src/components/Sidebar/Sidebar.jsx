import React from "react";
import "./Sidebar.css";
import "bootstrap/dist/css/bootstrap.css";
import { assets } from "../../assets/admin_assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar d-flex flex-column">
      <NavLink to="/add" className="d-flex sidebar-items add-items">
        <div>
          <img
            src={assets.add_icon}
            alt=""
            srcset=""
            className="sidebar-logo"
          />
        </div>
        <div className="d-none d-md-block">
          <p>Add Items</p>
        </div>
      </NavLink>
      <NavLink to="/list" className="d-flex sidebar-items">
        <div>
          <img
            src={assets.order_icon}
            alt=""
            srcset=""
            className="sidebar-logo"
          />
        </div>
        <div className="d-none d-md-block">
          <p>List Items</p>
        </div>
      </NavLink>
      <NavLink to="/orders" className="d-flex sidebar-items">
        <div>
          <img src={assets.order_icon} alt="" className="sidebar-logo" />
        </div>
        <div className="d-none d-md-block">
          <p>Orders</p>
        </div>
      </NavLink>
    </div>
  );
};

export default Sidebar;
