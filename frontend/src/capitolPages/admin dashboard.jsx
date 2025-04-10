import React from "react";
import "./adminStyles.css";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Barangay 1", value: 19.2 },
  { name: "Barangay 2", value: 9.6 },
  { name: "Barangay 3", value: 38.5 },
  { name: "Barangay 4", value: 26.9 },
  { name: "Barangay 5", value: 5.8 },
];

const COLORS = ["#0f3d3e", "#e8f6ef", "#70af85", "#3d550c", "#98dfaf"];

const AdminDashboard = () => {
  return (
    <div className="admin-container">
      <aside className="sidebar">
        <h2>Scholarship System</h2>
        <ul>
          <li className="active">Dashboard</li>
          <li>Beneficiaries</li>
          <li>Schedule</li>
          <li>About Us</li>
          <li>Landing Page</li>
          <li>Logout</li>
        </ul>
      </aside>

      <main className="dashboard-content">
        <h1>Admin Dashboard</h1>
        <div className="stats-container">
          <div className="stat-card">
            <p>👥 Headcount: 0</p>
          </div>
          <div className="stat-card">
            <p>🏫 Schools: 0</p>
          </div>
        </div>

        <div className="chart-container">
          <PieChart width={400} height={300}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;