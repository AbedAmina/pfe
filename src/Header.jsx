import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header" style={{ backgroundColor: '#508bfc' }}>
      <div className="logo">bibliotheque Esto</div>
      <nav className="navigation">
        <ul>
          <li><Link to="/Home">Home </Link></li>
        </ul>
      </nav>
      <form className="search">
        <input type="text" placeholder="Search..." />
        <button style={{
          backgroundColor: '#508bfc',
          color: '#fff',
          border: 'none',
          padding: '4px',
          fontSize: '16px',
          marginLeft: '10px',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>Chercher</button>
      </form>
    </header>
  );
}

export default Header;
