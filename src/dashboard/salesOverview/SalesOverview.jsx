import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import "./salesOverview.css";

const data = [
  { month: "Jan", sales: 400 },
  { month: "Feb", sales: 300 },
  { month: "Mar", sales: 500 },
  { month: "Apr", sales: 700 },
  { month: "May", sales: 600 }
];

export default function SalesOverview() {
  return (
    <div className="so-card">
      <h3 className="so-title">Sales Overview</h3>

      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
<Bar
  dataKey="sales"
  barSize={46}         
  radius={[8, 8, 0, 0]}
  fill="#0d6efd"
/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
