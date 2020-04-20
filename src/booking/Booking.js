import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';

import data from "../data";

import StatusText from './components/StatusText';
import StatusBar from './components/StatusBar';
import Avatar from './components/Avatar';
import MetaContent from './components/MetaContent';
import Invoice from './components/Invoice';
import QRtoast from './components/QRtoast';
import ActionButtons from './components/ActionButtons';

localStorage.setItem('bookings', JSON.stringify(data.bookings));

class Booking extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      bookings: []
    }
  }

  componentDidMount(){
    this.onUpdateBooking();
  }

  componentDidUpdate(prevProps){
    if (prevProps.status !== this.props.status || prevProps.service_id !== this.props.service_id) {
      this.onUpdateBooking();
    }
  }

  onUpdateBooking = () => {
    let data_bookings = localStorage.bookings ? JSON.parse(localStorage.bookings) : [];
    if(data_bookings.length !== 0){
      this.setState({
        bookings: data_bookings.filter((book) => book.status === this.props.status && book.service_id === this.props.service_id)
      });
    }
  }

  render() {
    return(
      <Container className="booking_main" fluid>
        {this.props.status === "ACTIVE" && <QRtoast /> }
        {
          this.state.bookings.map((booking)=>
            <div className="booking_card" key={"book_" + booking._id}>
              <Row>
                <Col xs="4">
                  <StatusText status={booking.status} updated_at={booking.updated_at}/>
                </Col>
                <Col xs="8">
                  <StatusBar status={booking.status} />
                </Col>
              </Row>

              <Row>
                <Col xs="6">
                  <Avatar />
                </Col>
                <Col xs="6">
                  <div className="deals">
                    <span>You two had 12 deals before</span>
                  </div>
                </Col>
              </Row>

              {booking.status === "PAYMENT"
                ? <Invoice />
                : <MetaContent />
              }

              <ActionButtons status={booking.status} book_id={booking._id} updateBooks={this.onUpdateBooking} />

            </div>
          )
        }
        <span className="the_end">No more service requests</span>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.active_status,
    service_id: state.service_id
  }
}

export default connect(mapStateToProps) (Booking);
