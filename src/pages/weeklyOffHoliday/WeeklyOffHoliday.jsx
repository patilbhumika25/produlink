import React from "react";
import "./weeklyOffHoliday.css";

export default function WeeklyOffHoliday() {
  return (
    <div className="weekly-page">

      {/* Header */}
      <div className="weekly-header">
        <h2>Weekly Off / Holiday Setting</h2>

        <button className="week-master-btn">
          Week Master
        </button>
      </div>

      <div className="weekly-content">

        {/* LEFT SIDE */}
        <div className="weekly-left">

          <h4>Weekly Off:</h4>

          <div className="week-checkbox">
            {["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].map(day => (
              <label key={day}>
                <input type="checkbox" /> {day}
              </label>
            ))}
          </div>

          <button className="update-btn">
            Update Weekly Off
          </button>

        </div>

        {/* RIGHT SIDE */}
        <div className="weekly-right">

          <h4>Holiday Setting:</h4>

          <div className="holiday-form">

            <div>
              <label>From Date:</label>
              <input type="date" />
            </div>

            <div>
              <label>To Date:</label>
              <input type="date" />
            </div>

            <div>
              <label>Type:</label>
              <select>
                <option>Select</option>
                <option>Holiday</option>
                <option>Festival</option>
              </select>
            </div>

            <div>
              <label>Description:</label>
              <input type="text" />
            </div>

            <div>
              <label>Days:</label>
              <input type="text" />
            </div>

            <button className="add-holiday-btn">
              Add Holiday
            </button>

          </div>

          {/* Table */}
          <table className="holiday-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Type</th>
                <th>Description</th>
                <th>Days</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td colSpan="4" className="no-data">
                  No Data Found
                </td>
              </tr>
            </tbody>
          </table>

        </div>

      </div>

    </div>
  );
}
