import React from 'react';
import { Container, Col, Row, Button } from 'reactstrap';
import { connect } from 'react-redux';

import data from "../data";

import StatusText from './StatusText';

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
      <Container className="booking_main">
        {
          this.state.bookings.map((booking)=>
            <div className="booking_card" key={"book_" + booking._id}>
              <Row>
                <Col xs="4">
                  <StatusText status={booking.status} updated_at={booking.updated_at}/>
                </Col>
                <Col xs="8">
                  <ul className="status_bar">
                    <li>
                      <span className="point">1</span>
                      <span className="text">Request</span>
                    </li>
                    <li>
                      <span className="point">2</span>
                      <span className="text">Service</span>
                    </li>
                    <li>
                      <span className="point">3</span>
                      <span className="text">Payment</span>
                    </li>
                  </ul>
                </Col>
              </Row>

              <Row>
                <Col xs="6">
                  <div className="avatar">
                    <div className="pic">
                      <img src="/images/avatar.png" alt="avatar"/>
                    </div>
                    <div className="txt">
                      <p>Ray Presley</p>
                      <span>San Francisco</span>
                    </div>
                  </div>
                </Col>
                <Col xs="6">
                  <div className="deals">
                    <span>You two had 12 deals before</span>
                  </div>
                </Col>
              </Row>

              <div className="meta_cont">
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
                <div className="addr_meta">
                  <span>50 Hagiwara Tea Garden Dr, San Francisco, CA 94118</span>
                </div>
              </div>

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
