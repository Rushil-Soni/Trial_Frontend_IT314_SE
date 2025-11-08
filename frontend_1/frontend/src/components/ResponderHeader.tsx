import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles.css';

export default function ResponderHeader() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="header-container">
      <div className="logo-container">
        <div className="logo-icon">🕊️</div>
        <div className="logo-text">HOPE FOR ALL</div>
      </div>
      <div className="header-actions">
        <button className="help-button">NEED HELP NOW?</button>
        <div className="notification-icon">🔔</div>
        <button 
          onClick={handleLogout}
          style={{ 
            background: 'transparent', 
            border: '1px solid white', 
            color: 'white', 
            padding: '0.5rem 1rem', 
            borderRadius: '0.25rem',
            cursor: 'pointer',
            fontSize: '0.875rem'
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

