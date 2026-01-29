import React from "react";
import "./backDatedEntry.css";

export default function BackDatedEntry() {
  return (
    <div className="backdated-page">

      {/* HEADER CARD */}
      <div className="backdated-header">
        <h2>Back Dated Entry Setting</h2>
        <button className="export-btn">Export To Excel</button>
      </div>

      {/* FILTER ROW */}
      <div className="filter-row">

        <div className="filter-group">
          <label>Select Module</label>

          <select>
            <option>Select Module Name</option>
            <option>Dashboard View</option>
            <option>Purchase Order</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Days:</label>
          <input type="number" placeholder="Enter Days" />
        </div>

        <button className="set-btn">Set To All</button>
        <button className="apply-btn">Apply</button>

      </div>

      {/* TABLE CARD */}

      <div className="table-card">

        <table>

          <thead>
            <tr>
              <th>User Name</th>
              <th>Name</th>
              <th>Days</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>user1</td>
              <td>Dashboard View</td>
              <td>
                <input type="number" className="day-input" />
              </td>
            </tr>

            <tr>
              <td>user2</td>
              <td>Purchase Order</td>
              <td>
                <input type="number" className="day-input" />
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}
