import React from 'react'

const StatusBar = (props) => {
  return(
    <ul className="status_bar">
      <li>
        <span className={"point" + (props.status === "ACTIVE" || props.status === "PAYMENT" ? " active" : "")}>1</span>
        <span className={"text" + (props.status === "ACTIVE" || props.status === "PAYMENT" ? " active" : "")}>Request</span>
        <span className={"linebar" + (props.status === "PAYMENT" ? " active" : "")}></span>
      </li>
      <li>
        <span className={"point" + (props.status === "PAYMENT" ? " active" : "")}>2</span>
        <span className={"text" + (props.status === "PAYMENT" ? " active" : "")}>Service</span>
        <span className={"linebar" + (props.status === "PAYMENT" ? " active" : "")}></span>
      </li>
      <li>
        <span className="point">3</span>
        <span className="text">Payment</span>
      </li>
    </ul>
  )
}

export default StatusBar;
