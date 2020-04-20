import React from 'react';

const MetaContent = (props) => {
  return(
    <div className="meta_cont">
      {props.status === "PENDING" &&
        <div className="time_meta">
          <p className="grey">This customer is available at:</p>
          <div className="date_row">
            <div className="single">
              <strong>Sunday, December 22nd, 2019</strong>
              <strong className="right">9:00 am — 2:00 pm</strong>
            </div>
            <div className="single">
              <strong>Sunday, December 29nd, 2019</strong>
              <strong className="right">9:00 am — 2:00 pm</strong>
            </div>
          </div>
        </div>
      }

      {props.status === "ACTIVE" &&
        <div className="time_meta">
          <p className="grey">Check in here or scan customer’s QR Code to check in when the service is about to start</p>
          <div className="date_row">
            <div className="single">
              <strong>Sunday, December 22nd, 2019</strong>
            </div>
          </div>
        </div>
      }

      <div className="addr_meta">
        <span>50 Hagiwara Tea Garden Dr, San Francisco, CA 94118</span>
      </div>
    </div>
  )
}

export default MetaContent;
