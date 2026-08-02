// components/Dashboard.jsx
import React from 'react';
import './Dashboard.css';
import liloanImage from '../assets/liloan.jpg';

const Dashboard = () => {
  const stats = [
    { icon: '📊', value: '156', label: 'Total Barangays' },
    { icon: '👥', value: '45,000+', label: 'Population' },
    { icon: '📋', value: '28', label: 'Health Centers' },
    { icon: '🏫', value: '32', label: 'Schools' },
  ];

  return (
    <section className="dashboard">
      {/* Hero Banner with Image and Vision */}
      <div className="dashboard-hero">
        <div className="hero-image-container">
          <img src={liloanImage} alt="Liloan Municipality" className="hero-image" />
          <div className="hero-overlay">
            <div className="hero-vision">
              <span className="vision-badge">LILOAN VISION</span>
              <p className="vision-text">
                "A competitive growth center in Southern Leyte with a clean, safe, 
                and resilient community of empowered Liloanons, governed by principled leaders."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
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