import React from "react";
import "./plantWiseSeries.css";

export default function PlantWiseSeries() {
  return (
    <div className="plant-series-page">

      {/* HEADER */}
      <div className="plant-series-header">
        <h2>Plant Series Permission</h2>
      </div>

      {/* TABLE CARD */}
      <div className="plant-series-card">

        <table>

          <thead>
            <tr>
              <th>Module</th>
              <th>Series</th>
              <th>Plant</th>
            </tr>
          </thead>

          <tbody>
            <tr>

              {/* MODULE LIST */}
              <td className="module-list">

                <p>FG Scrap / Rejection Note</p>
                <p>First Piece Inspection (FPI)</p>
                <p>Gate Inward (GE)</p>
                <p>Gate Outward (GEOUT)</p>
                <p>GST SALES</p>
                <p>GST SALES RETURN</p>
                <p>Purchase INDENT (INDENT)</p>
                <p>...</p>

              </td>

              {/* SERIES */}
              <td>
                <select className="series-select">
                  <option>Series 1</option>
                  <option>Series 2</option>
                  <option>Series 3</option>
                </select>
              </td>

              {/* PLANT */}
              <td>
                <select className="plant-select">
                  <option>Plant 1</option>
                  <option>Plant 2</option>
                  <option>Plant 3</option>
                </select>
              </td>

            </tr>
          </tbody>

        </table>

      </div>

    </div>
  );
}
