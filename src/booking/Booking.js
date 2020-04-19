import React from 'react';
import { Container, Col, Row, Button } from 'reactstrap';
import { connect } from 'react-redux';

import data from "../data";

import StatusText from './StatusText';
import StatusBar from './StatusBar';
import Avatar from './Avatar';
import MetaContent from './MetaContent';
import Invoice from './Invoice';
import QRtoast from './QRtoast';

class Booking extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      bookings: []
    }
  }

  componentDidMount(){
    this.setState({
      bookings: data.bookings.filter((book) => book.status === this.props.status && book.service_id === this.props.service_id)
    })
  }

  componentDidUpdate(prevProps){
    if (prevProps.status !== this.props.status || prevProps.service_id !== this.props.service_id) {
      this.setState({
        bookings: data.bookings.filter((book) => book.status === this.props.status && book.service_id === this.props.service_id)
      })
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

              <div className="action_btn">
                <Button outline color="info">Accept Request</Button>
                <Button outline color="info">Reschedule</Button>
                <a href="/" className="more_ico">more</a>
              </div>

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
