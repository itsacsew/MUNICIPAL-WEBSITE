import React from 'react';
import { contactInfo } from '../data/contentData';
import './QuickInfo.css';

const QuickInfo = () => {
  return (
    <section className="quick-info">
      <h2>Contact Information</h2>
      <ul className="contact-list">
        {contactInfo.map((item, index) => (
          <li key={index}>
            <span className="contact-icon">{item.icon}</span>
            {item.value}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default QuickInfo;