import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend   

} from "recharts";
import "./uniqueVisitor.css";

// Sample data week
const weekData = [
  { day: "Mon", pageViews: 30, sessions: 10 },
  { day: "Tue", pageViews: 40, sessions: 35 },
  { day: "Wed", pageViews: 50, sessions: 30 },
  { day: "Thu", pageViews: 45, sessions: 25 },
  { day: "Fri", pageViews: 55, sessions: 35 },
  { day: "Sat", pageViews: 110, sessions: 60 },
  { day: "Sun", pageViews: 95, sessions: 50 }
];

// Sample data month
const monthData = [
  { day: "Week 1", pageViews: 200, sessions: 120 },
  { day: "Week 2", pageViews: 300, sessions: 150 },
  { day: "Week 3", pageViews: 250, sessions: 130 },
  { day: "Week 4", pageViews: 400, sessions: 200 }
];

export default function UniqueVisitor() {
  const [activeTab, setActiveTab] = useState("Week");
  const data = activeTab === "Week" ? weekData : monthData;

  return (
    <div className="uv-container">
      <div className="uv-header">
        <h3>Unique Visitor</h3>
        <div className="uv-buttons">
          <button
            className={activeTab === "Week" ? "active" : ""}
            onClick={() => setActiveTab("Week")}
          >
            Week
          </button>
          <button
            className={activeTab === "Month" ? "active" : ""}
            onClick={() => setActiveTab("Month")}
          >
            Month
          </button>
        </div>
      </div>

     <ResponsiveContainer width="100%" height={260}>
  <AreaChart data={data}>
    <XAxis dataKey="day" />
    <YAxis />
    <Tooltip />
    <Legend verticalAlign="bottom" iconType="circle" />
    
    <Area
      type="monotone"
      dataKey="pageViews"
      stroke="#60a5fa"
      fill="#bfdbfe"
    />
    <Area
      type="monotone"
      dataKey="sessions"
      stroke="#2563eb"
      fill="#93c5fd"
    />
  </AreaChart>
</ResponsiveContainer>

    </div>
  );
}
