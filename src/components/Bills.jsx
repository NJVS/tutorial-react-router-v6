import React from 'react';
import { useParams } from 'react-router-dom';
import { getInvoice } from '../data';

const Bills = () => {
  const { invoiceID } = useParams();
  const invoice = getInvoice(+invoiceID);

  const toCurrency = new Intl.NumberFormat('en-us', {
    currency: 'USD',
    style: 'currency'
  })

  return (
    <div className='invoice-item'>
      <h3>{invoice.number}</h3>
      <h2>{invoice.name}</h2>
      <p>Total due: <span>{toCurrency.format(invoice.amount)}</span></p>
      <p>Due date: <span>{invoice.due}</span></p>
    </div>
  )
}

export default Bills