import React from "react";
import "./dashboard.css";

import UniqueVisitor from "./uniqueVisitor/UniqueVisitor";
import SalesOverview from "./salesOverview/SalesOverview";
import MainTitle from "./mainTitle/MainTitle";

export default function Dashboard() {
  return (
    <div className="dashboard">

      {/* Cards */}
      <div className="dashboard-cards">

        <div className="dash-card">
          <div className="dash-card-top">
            <p className="dash-title">BUDGET</p>
            <div className="dash-icon blue">$</div>
          </div>
          <h2 className="dash-value">$24k</h2>
          <div className="dash-bottom">
            <span className="dash-percent green">+12%</span>
            <span className="dash-sub">Since last month</span>
          </div>
        </div>

        <div className="dash-card">
          <div className="dash-card-top">
            <p className="dash-title">TOTAL CUSTOMERS</p>
            <div className="dash-icon green">👤</div>
          </div>
          <h2 className="dash-value">1.6k</h2>
          <div className="dash-bottom">
            <span className="dash-percent red">-16%</span>
            <span className="dash-sub">Since last month</span>
          </div>
        </div>

        <div className="dash-card">
          <div className="dash-card-top">
            <p className="dash-title">TASK PROGRESS</p>
            <div className="dash-icon orange">📋</div>
          </div>
          <h2 className="dash-value">75.5%</h2>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: "75.5%" }}
            ></div>
          </div>
        </div>

        <div className="dash-card">
          <div className="dash-card-top">
            <p className="dash-title">TOTAL PROFIT</p>
            <div className="dash-icon purple">$</div>
          </div>
          <h2 className="dash-value">$15k</h2>
          <div className="dash-bottom">
            <span className="dash-percent green">+8%</span>
            <span className="dash-sub">Since last month</span>
          </div>
        </div>

      </div>

      {/* Charts */}
      <UniqueVisitor />

      <div className="dashboard-row">
        <SalesOverview />
        <MainTitle />
      </div>

    </div>
  );
}
