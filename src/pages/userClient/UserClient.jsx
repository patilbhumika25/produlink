import React from "react";
import "./userClient.css";

export default function UserClient() {
  return (
    <div className="user-client-page">

      {/* HEADER */}
      <div className="user-client-header">
        <h2>User Plant</h2>
      </div>

      {/* TABLE CARD */}
      <div className="user-client-table-card">

        <table>

          <thead>
            <tr>
              <th>Sr.</th>
              <th>Module Name</th>
              <th>Value</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td className="plant-name">Plant 1</td>
              <td>
                <select className="value-select">
                  <option>User_Plant</option>
                  <option>Admin_Plant</option>
                  <option>Guest_Plant</option>
                </select>
              </td>
            </tr>
          </tbody>

        </table>

      </div>

    </div>
  );
}
