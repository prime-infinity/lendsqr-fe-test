import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./DashBoard/Navbar";
import SideBar from "./DashBoard/Sidebar";
/* eslint-disable jsx-a11y/anchor-is-valid */
function DashBoard() {
  const [sidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  return (
    <div className="dashboard">
      <Navbar toggleSidebar={toggleSidebar} />
      <SideBar active={sidebarActive} />

      <div
        className="dashboard_sub container-fluid pb-5"
        style={{ paddingTop: "7%" }}
      >
        <div className="row ms-md-4 pe-md-4">
          <div className="col-12 pt-5 ps-md-5 pe-md-5">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
