import React from "react";
import "./scheduleMonthMaster.css";

export default function ScheduleMonthMaster() {
  return (
    <div className="schedule-page">

      {/* Header */}
      <div className="schedule-header">
        <h2>Schedule Month Master</h2>

        <button className="week-btn">
          Week Master
        </button>
      </div>

      {/* Form Row */}
      <div className="schedule-form">

        <div className="form-box">
          <label>Month Name</label>
          <input type="text" placeholder="Enter month name" />
        </div>

        <div className="form-box">
          <label>From Date</label>
          <input type="date" />
        </div>

        <div className="form-box">
          <label>To Date</label>
          <input type="date" />
        </div>

        <div className="form-box">
          <label>Month No</label>
          <input type="text" placeholder="MM" />
        </div>

        <div className="form-box">
          <label>Year No</label>
          <input type="text" placeholder="YYYY" />
        </div>

        <button className="add-btn">
          Add
        </button>

      </div>

      {/* Table */}
      <div className="schedule-table-box">

        <table>
          <thead>
            <tr>
              <th>Sr.</th>
              <th>Month Name</th>
              <th>From Date</th>
              <th>To Date</th>
              <th>Month No</th>
              <th>Year No</th>
              <th>W Days</th>
              <th>User</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            
          </tbody>

        </table>

      </div>

    </div>
  );
}
