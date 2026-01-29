import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {

  const [erpOpen, setErpOpen] = useState(false);
  const [userConfigOpen, setUserConfigOpen] = useState(false);
  const [erpConfigOpen, setErpConfigOpen] = useState(false);
  const [open, setOpen] = useState(true);
 
  return (
<div className={`sidebar ${open ? "open" : "closed"}`}>

      {/* LOGO */}
      <div className="sidebar-logo">
  <span>Produlink</span>

  <button
    className="toggle-btn"
    onClick={() => setOpen(!open)}
  >
    ☰
  </button>
</div>

      

      <ul className="sidebar-menu">

        {/*ERP SETTING */}

        <li
          className="menu-item"
          onClick={() => {
            setErpOpen(!erpOpen);
            setUserConfigOpen(false);
            setErpConfigOpen(false);
          }}
        >
          <div className="menu-title">
            ⚙ ERP Setting
            <span>{erpOpen ? "▼" : "▶"}</span>
          </div>
        </li>

        {erpOpen && (
          <ul className="submenu">

            {/* USER CONFIGURATION  */}

            <li
              className="submenu-parent"
              onClick={() => setUserConfigOpen(!userConfigOpen)}
            >
              <div className="submenu-title">
                User Configuration
                <span>{userConfigOpen ? "▼" : "▶"}</span>
              </div>
            </li>

            {userConfigOpen && (
              <ul className="nested-submenu">

                <li><NavLink to="/user-management">User Management</NavLink></li>
                <li><NavLink to="/user-permission">User Permission</NavLink></li>
                <li><NavLink to="/dashboard-permission">Dashboard Permission</NavLink></li>
                <li><NavLink to="/backdated-entry">Back Dated Entry Setting</NavLink></li>
                <li><NavLink to="/user-wise-series">User Wise Series</NavLink></li>
                <li><NavLink to="/userwise-production">Userwise Production</NavLink></li>
                <li><NavLink to="/userwise-auth">Userwise Auth</NavLink></li>
                <li><NavLink to="/user-client">User Client</NavLink></li>
                <li><NavLink to="/plant-wise-series">Plantwise Series</NavLink></li>
                <li><NavLink to="/alert-setting">Alert Setting</NavLink></li>
                <li><NavLink to="/user-wise-permission">User Wise Permission</NavLink></li>

              </ul>
            )}

            {/* ERP CONFIGURATION */}

            <li
              className="submenu-parent"
              onClick={() => setErpConfigOpen(!erpConfigOpen)}
            >
              <div className="submenu-title">
                ERP Configuration
                <span>{erpConfigOpen ? "▼" : "▶"}</span>
              </div>
            </li>

            {erpConfigOpen && (
              <ul className="nested-submenu">
                <li><NavLink to="/company-plant-setup">Company / Plant Setup</NavLink></li>  
                <li><NavLink to="/web-config">Web Config File</NavLink></li>
                <li><NavLink to="/financial-year">Financial Year</NavLink></li>
                <li><NavLink to="/financial-month">Financial Month Master</NavLink></li>
                <li><NavLink to="/schedule-month-master">Schedule Month Master</NavLink></li>
                <li><NavLink to="/weekly-off">Weekly Off / Holiday Setting</NavLink></li>
              </ul>
            )}

             <li><NavLink to="/change-password">Change Password</NavLink></li>
                <li><NavLink to="/login-history">Login History</NavLink></li>
                <li><NavLink to="/dealer-management">Dealer Management</NavLink></li>
                <li><NavLink to="/dashboard-backup">Dashboard Backup</NavLink></li>
                <li><NavLink to="/delete-record">Delete Record</NavLink></li>

          </ul>
        )}

        {/*MAIN MENU  */}

        <li><NavLink to="/masters">Masters</NavLink></li>
        <li><NavLink to="/purchase">Purchase</NavLink></li>
        <li><NavLink to="/store">Store</NavLink></li>
        <li><NavLink to="/production">Production</NavLink></li>
        <li><NavLink to="/quality">Quality</NavLink></li>
        <li><NavLink to="/sales">Sales</NavLink></li>

      </ul>

    </div>
  );
}
