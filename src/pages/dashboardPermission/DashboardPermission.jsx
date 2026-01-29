import React from "react";
import "./dashboardPermission.css";

export default function DashboardPermission() {
  return (
    <div className="dash-permission-page">

      {/* TITLE */}
      <h2 className="dash-title">Dashboard Permission</h2>

      {/* FILTER CARD */}
      <div className="dash-filter-card">

        <div className="filter-left">

          <label>Select Dept:</label>

          <select>
            <option>Admin</option>
            <option>Purchase</option>
            <option>Store</option>
          </select>

          <div className="enable-all">
            <input type="checkbox" />
            <span>Enable All Permissions</span>
          </div>

        </div>

        <div className="filter-right">
          <button className="save-btn">Save</button>
          <button className="cancel-btn">Cancel</button>
        </div>

      </div>

      {/* TABLE CARD */}

      <div className="dash-table-card">

        <table>
          <thead>
            <tr>
              <th>Sr</th>
              <th>Permission Name</th>
              <th>Module Name</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>1</td>
              <td>Dashboard View</td>
              <td>Admin</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>Purchase Order</td>
              <td>Purchase</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}
