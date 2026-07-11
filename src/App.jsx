import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Login from './pages/Login';
import './App.css';

function Home() {
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
