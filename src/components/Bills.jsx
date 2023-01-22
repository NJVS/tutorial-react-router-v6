import React from 'react';
import { useParams } from 'react-router-dom';

const Bills = () => {
  const { invoiceID } = useParams();

  return (
    <div className='invoice-item'>Invoice No.{invoiceID}</div>
  )
}

export default Bills