import React from "react";
import { useNavigate } from "react-router-dom";
import "./disableUserList.css";

export default function DisableUserList() {

  const navigate = useNavigate();

  return (
    <div className="disable-page">

      {/* HEADER */}
      <div className="disable-header">

        <h2>Disable User List</h2>

        <button
          className="back-btn"
          onClick={() => navigate("/user-management")}
        >
          User Management
        </button>

      </div>

      {/* TABLE */}

      <div className="disable-table-box">

        <table>
          <thead>
            <tr>
              <th>Sr.</th>
              <th>Department</th>
              <th>Department</th>
              <th>Full Name</th>
              <th>User Name</th>
              <th>Password</th>
              <th>Disable Date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>1</td>
              <td>Quality</td>
              <td>
                <select>
                  <option>Quality</option>
                  <option>Planning</option>
                </select>
              </td>
              <td>Bharat Chavan</td>
              <td>bharat</td>
              <td>DisAbc*</td>
              <td>02/10/2024 13:40:05</td>
              <td>
                <button className="enable-btn">Enable User</button>
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>Planning</td>
              <td>
                <select>
                  <option>Planning</option>
                  <option>Quality</option>
                </select>
              </td>
              <td>Sangram Gutte</td>
              <td>sangram</td>
              <td>DisAbc*</td>
              <td>N/A</td>
              <td>
                <button className="enable-btn">Enable User</button>
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}
