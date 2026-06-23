import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import './App.css';

function App() {
  return (
    <>
      <div className="noise-overlay"></div>
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
      <footer className="footer container">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} 0pinion. Refined debate.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
