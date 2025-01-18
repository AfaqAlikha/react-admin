import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import { MdOutlineMailOutline } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { MdOutlinePreview } from "react-icons/md";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";

const SideBar = () => {
  const location = useLocation(); // Get the current route

  return (
    <div className="sidbare">
      <ul className="mb-0 sidebar-btn">
        <Link to="/" className="sidbar-link">
          <li className={`w-100 sidebar-active ${location.pathname === "/" ? "active" : ""}`}>
            <div  className={` sidebar-title ${location.pathname === "/" ? "active-color" : "#5e5d72"}`}>
              <div>
                <RxDashboard className={` ${location.pathname === "/" ? "active-color" : "#5e5d72"}`} fontSize="24px" />
              </div>
              Dashboard
            </div>
          </li>
        </Link>

        <Link to="/inbox" className="sidbar-link">
          <li className={`w-100 mt-2 sidebar-active ${location.pathname === "/inbox" ? "active" : ""}`}>
            <div className={` sidebar-title ${location.pathname === "/inbox" ? "active-color" : "#5e5d72"}`}>
              <div className="countwaper">
                <MdOutlineMailOutline className={` ${location.pathname === "/inbox" ? "active-color" : "#5e5d72"}`} fontSize="24px" />
                <span className="count-inbox">6</span>
              </div>
              Inbox
            </div>
          </li>
        </Link>

        <Link to="/schedule" className="sidbar-link">
          <li className={`w-100 mt-2 sidebar-active ${location.pathname === "/schedule" ? "active" : ""}`}>
            <div className={` sidebar-title ${location.pathname === "/schedule" ? "active-color" : "#5e5d72"}`}>
              <div>
                <RiCalendarScheduleLine className={` ${location.pathname === "/schedule" ? "active-color" : "#5e5d72"}`} fontSize="24px" />
              </div>
              Schedule
            </div>
          </li>
        </Link>

        <Link to="/reviews" className="sidbar-link">
          <li className={`w-100 mt-2 sidebar-active ${location.pathname === "/reviews" ? "active" : ""}`}>
            <div className={` sidebar-title ${location.pathname === "/reviews" ? "active-color" : "#5e5d72"}`}>
              <div className="countwaper">
                <MdOutlinePreview className={` ${location.pathname === "/reviews" ? "active-color" : "#5e5d72"}`} fontSize="24px" />
                <span className="count-inbox">6</span>
              </div>
              Reviews
            </div>
          </li>
        </Link>

        <Link to="/settings" className="sidbar-link">
          <li className={`w-100 mt-2 sidebar-active ${location.pathname === "/settings" ? "active" : ""}`}>
            <div className={` sidebar-title ${location.pathname === "/settings" ? "active-color" : "#5e5d72"}`} >
              <div>
                <IoSettingsOutline className={` ${location.pathname === "/settings" ? "active-color" : "#5e5d72"}`} fontSize="24px"  />
              </div>
              Settings
            </div>
          </li>
        </Link>
      </ul>

      <Button className="btn-logout d-flex align-items-center gap-1">
        <LuLogOut fontSize={24} />
        Logout
      </Button>
    </div>
  );
};

export default SideBar;
