// components/Dashboard.jsx
import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const stats = [
    { icon: '📊', value: '156', label: 'Total Barangays' },
    { icon: '👥', value: '45,000+', label: 'Population' },
    { icon: '📋', value: '28', label: 'Health Centers' },
    { icon: '🏫', value: '32', label: 'Schools' },
  ];

  return (
    <section className="dashboard">
      <div className="dashboard-banner">
        <h1>Welcome to Municipality of Liloan</h1>
        <p>Your partner in progress and community development</p>
      </div>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Dashboard;