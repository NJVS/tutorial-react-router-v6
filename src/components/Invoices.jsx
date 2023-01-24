import React from 'react';
import { Link, Outlet } from 'react-router-dom';
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
              <Link
                key={invoice.number}
                to={`/invoices/${invoice.number}`}
              >
                {invoice.name}
              </Link>
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