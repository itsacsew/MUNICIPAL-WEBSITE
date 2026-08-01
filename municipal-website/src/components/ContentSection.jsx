// components/ContentSection.jsx
import React from 'react';
import { contentCards } from '../data/contentData';
import './ContentSection.css';

const ContentSection = () => {
  return (
    <section className="content-section">
      <h2 className="section-title">Quick Links</h2>
      <div className="cards-grid">
        {contentCards.map((card, index) => (
          <div className="card" key={index}>
            <div className="card-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <a href={card.link} className="card-link">Learn More →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentSection;