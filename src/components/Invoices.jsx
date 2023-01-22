import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const invoices = [
  {
    name: 'Santa Monica',
    number: 1995,
    amount: 10800,
    due: '12/05/1995'
  },
  {
    name: 'Stankonia',
    number: 2000,
    amount: 8000,
    due: '10/31/2000'
  },
  {
    name: 'Ocean Avenue',
    number: 2003,
    amount: 9500,
    due: '07/22/2003'
  },
  {
    name: 'Tubthumper',
    number: 1997,
    amount: 14000,
    due: '09/01/1997'
  },
  {
    name: 'Wide Open Spaces',
    number: 1998,
    amount: 4600,
    due: '01/27/1998'
  }
]

const Invoices = () => {
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