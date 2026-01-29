import React from "react";
import "./userWiseAuth.css";

export default function UserWiseAuth() {
  return (
    <div className="auth-page">

      {/* HEADER */}
      <div className="auth-header">
        <h2>User Wise Auth Setting</h2>
      </div>

      {/* FILTER ROW */}
      <div className="auth-filter">

        <div className="filter-left">

          <label className="checkbox-label">
            <input type="checkbox" /> User Name :
          </label>

          <input
            type="text"
            placeholder=""
            className="input-box"
          />

        </div>

        <div className="filter-right">

          <label>Plant:</label>

          <select className="input-box">
            <option>Plant 1</option>
            <option>Plant 2</option>
          </select>

          <button className="search-btn">Search</button>

        </div>

      </div>

      {/* TABLE */}

      <div className="auth-table-card">

        <table>

          <thead>
            <tr>
              <th>Sr.</th>
              <th>Plant</th>
              <th>Department</th>
              <th>Full Name</th>
              <th>User Name</th>
              <th>Item New / Edit Main Group</th>
              <th>Item Auth Main Group</th>
              <th>Cust/Supp Auth Cust/Supp Type</th>
              <th>Quotation with limit</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>1</td>
              <td>Plant 1</td>
              <td>Production</td>
              <td>John Doe</td>
              <td>john.doe</td>
              <td>Yes</td>
              <td>No</td>
              <td>Yes</td>
              <td>No</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}
