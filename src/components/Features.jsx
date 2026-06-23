import React from 'react';
import './Features.css';

export default function Features() {
  const features = [
    {
      num: "01",
      title: "Live Debate Arena",
      description: "Step into real-time, structured debate rooms where ideas clash, moderated by logic and community consensus rather than algorithms."
    },
    {
      num: "02",
      title: "Niche Communities",
      description: "Build and cultivate groups dedicated to specialized topics, ensuring high-signal conversations and rigorous discourse."
    },
    {
      num: "03",
      title: "Zero Distractions",
      description: "A minimalist interface designed purely for focus. No feeds, no ads, no noise—just intellectual pursuit."
    }
  ];

  return (
    <section id="features" className="features container">
      <div className="features-intro animate-fade-up">
        <h2>The Architecture of Thought</h2>
        <p>Purpose-built mechanisms to facilitate profound discussions.</p>
      </div>

      <div className="features-list">
        {features.map((f, i) => (
          <div key={i} className={`feature-item animate-fade-up delay-${i+1}`}>
            <div className="feature-num">{f.num}</div>
            <div className="feature-text">
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
