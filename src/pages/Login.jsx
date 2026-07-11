import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');
    
    if (isSignUp) {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      
      if (error) {
        setError(error.message);
      } else {
        setMessage('Check your email for the confirmation link.');
      }
    } else {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) {
        setError(error.message);
      } else {
        navigate('/');
      }
    }
    
    setLoading(false);
  };

  return (
    <div className="login-container">
      <div className="noise-overlay"></div>
      
      <div className="login-box glass animate-fade-up">
        <div className="login-header">
          <Link to="/">
            <img src="/assets/title.png" alt="0pinion" className="login-logo" />
          </Link>
          <h2>{isSignUp ? 'Create Account' : 'Welcome Back'}</h2>
          <p>{isSignUp ? 'Sign up to join the debate' : 'Enter your credentials to continue'}</p>
        </div>
        
        {error && <div className="error-message">{error}</div>}
        {message && <div className="success-message" style={{ backgroundColor: 'rgba(74, 222, 128, 0.1)', color: '#4ade80', padding: '0.75rem', borderRadius: '0.5rem', marginBottom: '1.5rem', fontSize: '0.9rem', textAlign: 'center', border: '1px solid rgba(74, 222, 128, 0.2)' }}>{message}</div>}
        
        <form onSubmit={handleAuth} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              placeholder="you@example.com"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
              placeholder="••••••••"
            />
          </div>
          
          <button type="submit" className="btn btn-primary login-btn" disabled={loading}>
            {loading ? (isSignUp ? 'Creating account...' : 'Signing in...') : (isSignUp ? 'Sign Up' : 'Sign In')}
          </button>
        </form>
        
        <div style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          {isSignUp ? "Already have an account? " : "Don't have an account? "}
          <button 
            type="button" 
            onClick={() => { setIsSignUp(!isSignUp); setError(''); setMessage(''); }}
            style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', fontFamily: 'inherit', fontWeight: '500', textDecoration: 'underline' }}
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
}
