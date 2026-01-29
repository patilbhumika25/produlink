import React from "react";
import "./userWiseSeries.css";

export default function UserWiseSeries() {
  return (
    <div className="series-page">

      {/* HEADER */}
      <div className="series-header">
        <h2>User Series Permission</h2>
        <button className="export-btn">Export To Excel</button>
      </div>

      {/* FILTER BAR */}
      <div className="series-filter">

        <div className="filter-item">
          <label>Select User:</label>

          <select>
            <option>admin | ADMIN</option>
            <option>user1 | USER</option>
          </select>
        </div>

        <input
          type="text"
          className="days-input"
          placeholder=""
        />

        <button className="set-btn">Set To All</button>

      </div>

      {/* TABLE */}

      <div className="series-table-card">

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
                <input type="number" className="table-input" />
              </td>
            </tr>

            <tr>
              <td>user2</td>
              <td>Purchase Order</td>
              <td>
                <input type="number" className="table-input" />
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}
