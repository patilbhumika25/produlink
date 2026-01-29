import React, { useState } from "react";
import "./financialMonthMaster.css";

export default function FinancialMonthMaster() {

  const [showQuarter, setShowQuarter] = useState(false);

  return (
    <div className="month-page">

      {!showQuarter && (

        <>
          <div className="month-header">
            <h2>Month Master</h2>

            <div>
              <button
                className="quarter-btn"
                onClick={() => setShowQuarter(true)}
              >
                Add Quarter
              </button>

              <button className="info-btn">
                Company Info
              </button>
            </div>
          </div>

          <div className="month-table-box">

            <table>
              <thead>
                <tr>
                  <th>Sr. Id</th>
                  <th>Month Name</th>
                  <th>From Date</th>
                  <th>To Date</th>
                  <th>Month No</th>
                  <th>Year No</th>
                  <th>W Day</th>
                  <th>Scrap OPBal</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1</td>
                  <td>January</td>
                  <td>01/01/2024</td>
                  <td>31/01/2024</td>
                  <td>1</td>
                  <td>2024</td>
                  <td>21</td>
                  <td>100</td>
                  <td>✏️</td>
                  <td>🗑️</td>
                </tr>
              </tbody>

            </table>

          </div>
        </>
      )}

      {showQuarter && (

        <>
          <div className="quarter-header">
            <h2>Quarter Master</h2>

            <button
              className="back-btn"
              onClick={() => setShowQuarter(false)}
            >
              ← Back
            </button>
          </div>

          <div className="quarter-form">

            <div className="q-row">

              <div>
                <label>Year:</label>
                <select>
                  <option>Select All</option>
                  <option>2024</option>
                  <option>2025</option>
                </select>
              </div>

              <div>
                <label>Quarter:</label>
                <select>
                  <option>Select All</option>
                  <option>Q1</option>
                  <option>Q2</option>
                  <option>Q3</option>
                  <option>Q4</option>
                </select>
              </div>

              <div>
                <label>Quarter Name:</label>
                <input type="text" />
              </div>

              <div>
                <label>From Date:</label>
                <input type="date" />
              </div>

              <div>
                <label>To Date:</label>
                <input type="date" />
              </div>

              <button className="save-btn">
                SAVE
              </button>

            </div>

          </div>

          <div className="quarter-table-box">

            <table>
              <thead>
                <tr>
                  <th>Sr.</th>
                  <th>Financial Year</th>
                  <th>Quarter No</th>
                  <th>Quarter Name</th>
                  <th>From Date</th>
                  <th>To Date</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1</td>
                  <td>2024</td>
                  <td>1</td>
                  <td>January</td>
                  <td>01/01/2024</td>
                  <td>31/01/2024</td>
                  <td>✏️</td>
                  <td>🗑️</td>
                </tr>
              </tbody>

            </table>

          </div>
        </>
      )}

    </div>
  );
}
