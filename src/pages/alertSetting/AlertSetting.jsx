import React from "react";
import "./alertSetting.css";

export default function AlertSetting() {
  return (
    <div className="alert-page">

      {/* PAGE TITLE */}
      <div className="alert-header">
        <h2>Dept. Wise Alert Setup</h2>
      </div>

      {/* FILTER SECTION */}
      <div className="alert-filter">

        <div className="filter-left">
          <label>Select Dept:</label>
          <select>
            <option>Select</option>
            <option>Admin</option>
            <option>Purchase</option>
            <option>Store</option>
            <option>Quality</option>
          </select>

          <label className="check-box">
            <input type="checkbox" /> All
          </label>
        </div>

      </div>

      {/* TABLE SECTION */}
      <div className="alert-content">

        {/* LEFT TABLE */}
        <div className="alert-table-box">

          <table>
            <thead>
              <tr>
                <th>Sr.</th>
                <th>Alert Type</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>Admin</td>
                <td>
                  <input type="text" />
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>Purchase</td>
                <td>
                  <input type="text" />
                </td>
              </tr>
            </tbody>

          </table>

        </div>

        {/* RIGHT TABLE */}
        <div className="alert-table-box">

          <h3 className="right-title">
            User - Dept Wise Alert (Allocated)
          </h3>

          <table>
            <thead>
              <tr>
                <th>Sr.</th>
                <th>Dept Name</th>
                <th>Alert Count</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>Admin</td>
                <td>72</td>
              </tr>

              <tr>
                <td>2</td>
                <td>Purchase</td>
                <td>0</td>
              </tr>

              <tr>
                <td>3</td>
                <td>Store</td>
                <td>6</td>
              </tr>

              <tr>
                <td>4</td>
                <td>Quality</td>
                <td>7</td>
              </tr>

              <tr>
                <td>5</td>
                <td>Planning</td>
                <td>5</td>
              </tr>
            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}
