import React from "react";
import "./userwiseProduction.css";

export default function UserwiseProduction() {
  return (
    <div className="prod-page">

      {/* HEADER */}

      <div className="prod-header">
        <h2>User Permission - Production Operation Wise</h2>
        <button className="export-btn">Export To Excel</button>
      </div>

      {/* USER SELECT */}

      <div className="user-select-row">
        <label>Select User:</label>

        <select>
          <option>Select User</option>
          <option>admin</option>
          <option>user1</option>
        </select>
      </div>

      {/* CONTENT GRID */}

      <div className="prod-grid">

        {/* AVAILABLE OPERATIONS */}

        <div className="prod-box">
          <h4>Available Operations</h4>

          <div className="operation-list">

            {[
              "ASSEMBLY",
              "BENDING",
              "BLACK PLATE",
              "BLOCKING",
              "CED COAT",
              "CHAMFER",
              "CHECKING",
              "CNC-1",
              "CNC-2",
              "CNC-3"
            ].map((item, index) => (
              <label key={index}>
                <input type="checkbox" /> {item}
              </label>
            ))}

          </div>
        </div>

        {/* SELECTED OPERATIONS */}

        <div className="prod-box">
          <h4>Selected Operations</h4>
          <div className="empty-box">No Data Found!</div>
        </div>

        {/* USER LIST */}

        <div className="prod-box">
          <h4>User List</h4>
          <div className="empty-box">No Data Found!</div>
        </div>

      </div>

    </div>
  );
}
