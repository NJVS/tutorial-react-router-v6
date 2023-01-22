import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <h2>React Hook</h2>
        <ul>
          <li><Link to="/invoices">Invoices</Link></li>
          <li><Link to="/expenses">Expenses</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar