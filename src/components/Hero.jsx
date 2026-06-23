import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow"></div>
      <div className="container hero-container animate-fade-up">
        <h1 className="sr-only">0pinion - Elevate Your Intellect</h1>
        <img src="/assets/title.png" alt="0pinion" className="hero-main-symbol delay-1" />
        <h2 className="hero-title delay-2">
          Elevate Your <span className="text-gradient">Intellect.</span>
        </h2>
        <p className="hero-subtitle delay-3">
          A sanctuary for rigorous debate and unadulterated learning. Strip away the noise of modern social media and immerse yourself in pure discourse.
        </p>
        <div className="hero-actions delay-3">
          <a href="#join" className="btn btn-primary">Start Debating</a>
        </div>
      </div>
    </section>
  );
}
