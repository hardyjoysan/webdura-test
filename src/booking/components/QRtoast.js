import React from 'react';

const QRtoast = () => {
  return(
    <div className="qrtoast">
      <p>These are your upcoming services. You could scan your customer’s QR Code before service to check-in, or scan QR Code to generate invoice for payments. </p>
      <a href="/"><img src="/images/close.svg" alt="close"/> </a>
    </div>
  )
}

export default QRtoast
