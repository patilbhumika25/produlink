import React from "react";
import "./userPermission.css";

export default function UserPermission() {
  return (
    <div className="permission-page">

      {/* HEADER */}
      <h2 className="page-title">User Permission</h2>

      {/* TOP BAR */}
      <div className="permission-top">

        <select className="user-select">
          <option>Select User</option>
          <option>Admin</option>
          <option>Raman</option>
        </select>

        <div className="btn-group">
          <button>Export User Permission</button>
          <button>Export All User Permission</button>
          <button>Export Modulewise Permission</button>
          <button>Export Userwise Active Permission</button>
          <button>Copy Permission</button>
        </div>

        <div className="check-all">
          <input type="checkbox" />
          <label>All</label>
        </div>

      </div>

      {/* SEARCH */}
      <input
        type="text"
        className="search-box"
        placeholder="Search permissions..."
      />

      {/* PERMISSION LIST */}

      <div className="permission-list">

        <label><input type="checkbox" /> All_Masters</label>
        <label><input type="checkbox" /> Purchase</label>
        <label><input type="checkbox" /> Store</label>
        <label><input type="checkbox" /> Production</label>
        <label><input type="checkbox" /> ERPSetting</label>
        <label><input type="checkbox" /> Quality</label>
        <label><input type="checkbox" /> Sales</label>
        <label><input type="checkbox" /> VendorsUserManagement</label>

      </div>

      {/* ASSIGN BUTTON */}

      <div className="assign-box">
        <button className="assign-btn">Assign Permission</button>
      </div>

    </div>
  );
}
