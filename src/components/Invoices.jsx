import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { getInvoices } from '../data';

const Invoices = () => {

  const invoices = getInvoices();

  return (
    <main className='invoices container'>
      <aside>
        <h3>Names</h3>
        <ul>
          {invoices.map(invoice => (
            <li key={invoice.number}>
              <NavLink
                // style={({ isActive }) => {
                //   return {
                //     color: isActive && 'red'
                //   }
                // }}
                className={({ isActive }) => isActive && 'active'}
                key={invoice.number}
                to={`/invoices/${invoice.number}`}
              >
                {invoice.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>
      <section>
        <h3>Invoice</h3>
        <Outlet />
      </section>
    </main>
  )
}

export default Invoices