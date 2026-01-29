import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./userManagement.css";

export default function UserManagement() {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="user-page">

      {/* HEADER */}
      <div className="user-header">
        <h2>User Management</h2>

        <div className="user-actions">
          <button className="btn" onClick={() => setShowModal(true)}>Add New</button>
<button
  className="btn"
  onClick={() => navigate("/disable-user-list")}
>
  Disable User List
</button>
          <button className="btn">Export Excel</button>
        </div>
      </div>

      {/* FILTER BOX */}
      <div className="filter-box">

        <div className="filter-left">
          <label>
            <input type="checkbox" />
            Include User Name Like
          </label>

          <input
            type="text"
            placeholder="User Name Like"
            className="input"
          />
        </div>

        <div className="filter-right">
          <label>Plant:</label>

          <select className="input">
            <option>Select Plant</option>
            <option>Produlink</option>
            <option>Sharp</option>
          </select>

          <button className="search-btn">Search</button>
        </div>

      </div>

      {/* TABLE */}
      <div className="table-box">

        <table>
          <thead>
            <tr>
              <th>Sr.</th>
              <th>Plant</th>
              <th>Department</th>
              <th>Full Name</th>
              <th>User Name</th>
              <th>Email ID</th>
              <th>Mobile No</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Sharp</td>
              <td>Purchase</td>
              <td>Admin</td>
              <td>Admin</td>
              <td>Admin@gmail.com</td>
              <td>6567876567</td>
              <td><button className="icon-btn">✏</button></td>
              <td><button className="icon-btn">🗑</button></td>
            </tr>

            <tr>
              <td>2</td>
              <td>Produlink</td>
              <td>ALL Master</td>
              <td>Raman</td>
              <td>Raman</td>
              <td>Raman@gmail.com</td>
              <td>8765431290</td>
              <td><button className="icon-btn">✏</button></td>
              <td><button className="icon-btn">🗑</button></td>
            </tr>

            <tr>
              <td>3</td>
              <td>Produlink</td>
              <td>Store</td>
              <td>Raman Bhalla</td>
              <td>Raman Bhalla</td>
              <td>Raman@gmail.com</td>
              <td>7654321098</td>
              <td><button className="icon-btn">✏</button></td>
              <td><button className="icon-btn">🗑</button></td>
            </tr>
          </tbody>
        </table>

      </div>

      {/* ================= ADD NEW USER MODAL ================= */}

      {showModal && (
        <div className="modal-overlay">

          <div className="modal-box">

            <div className="modal-header">
              <h3>Add New User</h3>
              <span className="close-btn" onClick={() => setShowModal(false)}>✖</span>
            </div>

            <div className="modal-body">

              <div className="form-row">
                <label>Plant:</label>
                <input type="text" value="Produlink" readOnly />
              </div>

              <div className="form-row">
                <label>Department:</label>
                <select>
                  <option>Select</option>
                  <option>Purchase</option>
                  <option>Store</option>
                </select>
              </div>

              <div className="form-row">
                <label>Full Name:</label>
                <input type="text" />
              </div>

              <div className="form-row">
                <label>Username:</label>
                <input type="text" />
              </div>

              <div className="form-row">
                <label>Password:</label>
                <input type="password" />
              </div>

              <div className="form-row">
                <label>Email Id:</label>
                <input type="email" />
              </div>

              <div className="form-row">
                <label>Mobile No:</label>
                <input type="text" />
              </div>

              <div className="save-box">
                <button className="save-btn">Save</button>
              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}
