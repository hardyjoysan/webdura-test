import React from 'react';
import { Container, Col, Row, Button } from 'reactstrap';

class Booking extends React.Component {

    render() {
        return(
            <Container className="booking_main">
                <div className="booking_card">
                  <Row>
                    <Col xs="4">
                      <div className="status_txt">
                        <p>Pending Request</p>
                        <span>10:22 am, 12/01/2019</span>
                      </div>
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

                <span className="the_end">No more service requests</span>
            </Container>
        )
    }
}

export default Booking;
