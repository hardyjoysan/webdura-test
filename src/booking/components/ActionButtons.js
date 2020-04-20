import React from 'react';
import { Button } from 'reactstrap';

const ActionButtons = (props) => {

  const changeStatus = (action) => {
    const data_bookings = localStorage.bookings ? JSON.parse(localStorage.bookings) : [];
    switch (action) {
      case "ACCEPT":
          var serBooks = data_bookings.map((book) => {
            if (book._id === props.book_id) {
              return {...book, status: "ACTIVE"}
            }
            return book;
          })
          localStorage.setItem('bookings', JSON.stringify(serBooks));
          props.updateBooks();
        break;

      case "INVOICE":
        var payBooks = data_bookings.map((book) => {
          if (book._id === props.book_id) {
            return {...book, status: "PAYMENT"}
          }
          return book;
        })
        localStorage.setItem('bookings', JSON.stringify(payBooks));
        props.updateBooks();
        break;
      default:
        return false;

    }
  }

  const swithButtons = () => {
    switch(props.status){
      case "PENDING":
        return (
          <>
            <Button outline color="info" onClick={() => changeStatus("ACCEPT") }>Accept Request</Button>
            <Button outline color="info">Reschedule</Button>
          </>
        )
      case "ACTIVE":
        return (
          <>
            <Button outline color="info">Check In</Button>
            <Button outline color="info" onClick={() => changeStatus("INVOICE") }>Generate Invoice</Button>
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
  
  return(
    <div className="action_btn">
      {swithButtons()}
      <a href="/" className="more_ico">more</a>
    </div>
  )
}

export default ActionButtons
