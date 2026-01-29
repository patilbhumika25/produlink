import React from "react";
import "./userWisePermission.css";

export default function UserWisePermission() {

  const data = [
    {
      id: 145,
      permission: "Consumption Report",
      users: "PRASHANT, admin, more, mahadev, sangram",
      count: 5
    },
    {
      id: 146,
      permission: "Contra Voucher",
      users: "",
      count: 0
    },
    {
      id: 147,
      permission: "Contra Voucher List",
      users: "",
      count: 0
    },
    {
      id: 148,
      permission: "Contractor Master",
      users: "admin, md, mahadev, more, ayush, prash, vinod",
      count: 15
    },
    {
      id: 149,
      permission: "Contractor Master DELETE",
      users: "admin, mahadev, md, more, ayush, prash, vinod",
      count: 11
    },
    {
      id: 150,
      permission: "Contractor Master EDIT",
      users: "md, mahadev, more, ayush, admin, prash, vinod",
      count: 9
    }
  ];

  return (
    <div className="userwise-container">

      {/* HEADER */}
      <div className="page-header">
        <h2>User Wise Permission</h2>
      </div>

      {/* SEARCH BAR */}
      <div className="search-row">
        <label>Select Permission :</label>

        <input
          type="text"
          placeholder="Search permissions..."
        />

        <button className="search-btn">🔍</button>
      </div>

      {/* TABLE */}
      <div className="table-box">

        <table>
          <thead>
            <tr>
              <th>Sr.</th>
              <th>Permission Name</th>
              <th>User Name</th>
              <th>Count</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.permission}</td>
                <td className="user-names">{item.users}</td>
                <td>{item.count}</td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}
