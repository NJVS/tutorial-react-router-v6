import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <h2>React Hook</h2>
        <ul>
          <li><Link to="/invoice">Invoices</Link></li>
          <li><Link to="/Expenses">Expenses</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar