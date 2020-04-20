import React from 'react';

const Invoice = () => {
  return(
    <div className="invoice">
      <p className="info">Service is complete, please confirm payment amount:</p>
      <strong className="title">Invoice Item:</strong>
      <div className="price">
        <p>Session Price <span>$80.00</span></p>
      </div>
    </div>
  )
}

export default Invoice;
