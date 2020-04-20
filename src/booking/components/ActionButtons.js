import React from 'react';
import { Button } from 'reactstrap';

const swithButtons = (status) => {
  switch(status){
    case "PENDING":
      return (
        <>
          <Button outline color="info">Accept Request</Button>
          <Button outline color="info">Reschedule</Button>
        </>
      )
    case "ACTIVE":
      return (
        <>
          <Button outline color="info">Check In</Button>
          <Button outline color="info">Generate Invoice</Button>
        </>
      )
    case "PAYMENT":
      return (
        <>
          <Button outline color="info">Resend Invoice</Button>
          <Button outline color="info">Start a Chat</Button>
        </>
      )
    default:
      return;

  }
}

const ActionButtons = (props) => {
    return(
      <div className="action_btn">
        {swithButtons(props.status)}
        <a href="/" className="more_ico">more</a>
      </div>
    )
}

export default ActionButtons
