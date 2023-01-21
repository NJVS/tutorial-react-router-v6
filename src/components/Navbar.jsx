import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <h2>React Hook</h2>
        <ul>
          <li><a href="/invoice">Invoices</a></li>
          <li><a href="/Expenses">Expenses</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar