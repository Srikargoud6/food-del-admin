import React from "react";
import "./Sidebar.css";
import "bootstrap/dist/css/bootstrap.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiBoxList } from "react-icons/ci";
import { assets } from "../../assets/admin_assets/assets";

const Sidebar = () => {
  return (
    <div className="sidebar d-flex flex-column">
      <div className="d-flex sidebar-items add-items">
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
      </div>
      <div className="d-flex sidebar-items">
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
      </div>
      <div className="d-flex sidebar-items">
        <div>
          <img src={assets.order_icon} alt="" className="sidebar-logo" />
        </div>
        <div className="d-none d-md-block">
          <p>Orders</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
