import React from 'react';

const textinfo = (status) => {
  switch (status) {
    case "PENDING":
      return <p>Pending Request</p>

    case "ACTIVE":
      return <p>Upcoming Service</p>

    case "PAYMENT":
      return <p>Payment Pending</p>

    default:
      return false;

  }
}

const datetimeFormat = (content) => {
  let date = new Date(content);
  let DD = date.getDate();
  let MM = date.getMonth() + 1;
  MM = MM < 10 ? "0"+ MM : MM;
  let YY = date.getFullYear();
  let HH = date.toLocaleString('en-IN', { hour: 'numeric', minute: 'numeric', hour12: true })
  return (HH+", "+DD+"/"+MM+"/"+YY);
}

const StatusText = (props)  => {
  return(
    <div className="status_txt">
      { textinfo(props.status) }
      <span>{ datetimeFormat(props.updated_at) }</span>
    </div>
  )
}

export default StatusText;
