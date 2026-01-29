import React, { useState } from "react";
import "./financialYear.css";

export default function FinancialYear() {

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="fy-page">

      <div className="fy-header">
        <h2>Financial Year</h2>
      </div>

      <div className="fy-table-box">

        <table>
          <thead>
            <tr>
              <th>FyId</th>
              <th>Fy Name</th>
              <th>From_Date</th>
              <th>To_Date</th>
              <th>Short_Name</th>
              <th>Doc Start No.</th>
              <th>Fy Month</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Updated Financial Year 2024-2025</td>
              <td>2024-04-01</td>
              <td>2025-03-31</td>
              <td>2024-2025</td>
              <td>📄</td>
              <td>📄</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Updated Financial Year 2025-2026</td>
              <td>2025-09-17</td>
              <td>2025-09-17</td>
              <td>2025-2026</td>
              <td>📄</td>
              <td>📄</td>
            </tr>
          </tbody>

        </table>

      </div>

      <div className="fy-button-box">
        <button
          className="create-btn"
          onClick={() => setShowModal(true)}
        >
          Create New Year
        </button>
      </div>

      {/*POPUP */}

      {showModal && (

        <div className="fy-modal-overlay">

          <div className="fy-modal">

            <h3>Create New Financial Year</h3>

            <div className="modal-form">

              <label>Fy Name</label>
              <input type="text" />

              <label>From Date</label>
              <input type="date" />

              <label>To Date</label>
              <input type="date" />

              <label>Short Name</label>
              <input type="text" placeholder="eg. 2024-2025" />

            </div>

            <div className="modal-buttons">

              <button className="save-btn">
                Save
              </button>

              <button
                className="cancel-btn"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}
