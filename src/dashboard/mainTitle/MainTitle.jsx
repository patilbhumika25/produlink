import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "./mainTitle.css";

const data = [
  { name: "A", value: 35 },
  { name: "B", value: 25 },
  { name: "C", value: 20 },
  { name: "D", value: 20 }
];

const COLORS = ["#5fb3a2", "#f78c6b", "#8e9cc3", "#f4d35e"];

export default function MainTitle() {
  return (
    <div className="mt-card">
      <h3>Main title</h3>
      <p className="mt-sub">Secondary title</p>

      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Pie
            data={data}
            innerRadius={70}
            outerRadius={100}
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
